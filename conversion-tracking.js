/**
 * Professional Conversion Tracking for TriArch Studio
 * 
 * Tracks WhatsApp and Call clicks with zero duplicates
 * Uses dataLayer.push for GTM integration
 * Production-safe and performance optimized
 */

(function() {
    'use strict';

    // Ensure dataLayer exists
    window.dataLayer = window.dataLayer || [];

    // Track clicked elements to prevent duplicates
    const clickedElements = new WeakSet();
    
    // Debounce helper
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    /**
     * Push event to dataLayer
     * @param {string} eventName - Event name
     * @param {Object} eventData - Additional event data
     */
    function pushEvent(eventName, eventData) {
        const eventPayload = {
            event: eventName,
            timestamp: new Date().toISOString(),
            ...eventData
        };
        
        window.dataLayer.push(eventPayload);
        
        // Console log for debugging (remove in production if needed)
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log('Conversion Event:', eventPayload);
        }
    }

    /**
     * Track WhatsApp click
     * @param {HTMLElement} element - Clicked element
     */
    function trackWhatsAppClick(element) {
        if (clickedElements.has(element)) {
            return; // Already tracked
        }
        
        clickedElements.add(element);
        
        // Get button context
        const buttonType = element.classList.contains('float-btn') ? 'floating' : 
                          element.classList.contains('btn-primary') ? 'primary' :
                          element.classList.contains('btn-secondary') ? 'secondary' : 'link';
        
        const section = getSectionName(element);
        
        pushEvent('whatsapp_click', {
            button_type: buttonType,
            section: section,
            url: element.href || '',
            text: element.textContent.trim() || element.getAttribute('aria-label') || ''
        });
    }

    /**
     * Track Call click
     * @param {HTMLElement} element - Clicked element
     */
    function trackCallClick(element) {
        if (clickedElements.has(element)) {
            return; // Already tracked
        }
        
        clickedElements.add(element);
        
        // Get button context
        const buttonType = element.classList.contains('float-btn') ? 'floating' : 
                          element.classList.contains('btn-primary') ? 'primary' :
                          element.classList.contains('btn-secondary') ? 'secondary' : 'link';
        
        const section = getSectionName(element);
        const phoneNumber = element.href ? element.href.replace('tel:', '') : '';
        
        pushEvent('call_click', {
            button_type: buttonType,
            section: section,
            phone_number: phoneNumber,
            text: element.textContent.trim() || element.getAttribute('aria-label') || ''
        });
    }

    /**
     * Get section name where element is located
     * @param {HTMLElement} element - Element to check
     * @returns {string} Section name
     */
    function getSectionName(element) {
        let current = element;
        let depth = 0;
        const maxDepth = 10;
        
        while (current && depth < maxDepth) {
            if (current.id) {
                return current.id;
            }
            if (current.classList && current.classList.length > 0) {
                // Check for section classes
                for (let className of current.classList) {
                    if (className.includes('section') || 
                        className.includes('hero') || 
                        className.includes('about') || 
                        className.includes('nata') ||
                        className.includes('location') ||
                        className.includes('faq')) {
                        return className;
                    }
                }
            }
            current = current.parentElement;
            depth++;
        }
        
        return 'unknown';
    }

    /**
     * Check if URL is WhatsApp
     * @param {string} url - URL to check
     * @returns {boolean}
     */
    function isWhatsAppUrl(url) {
        if (!url) return false;
        const whatsappPatterns = [
            /wa\.me\//i,
            /api\.whatsapp\.com/i,
            /whatsapp\.com/i
        ];
        return whatsappPatterns.some(pattern => pattern.test(url));
    }

    /**
     * Check if URL is tel: link
     * @param {string} url - URL to check
     * @returns {boolean}
     */
    function isTelUrl(url) {
        if (!url) return false;
        return /^tel:/i.test(url);
    }

    /**
     * Handle click event with debouncing
     */
    const handleClick = debounce(function(e) {
        const target = e.target;
        const link = target.closest('a');
        
        if (!link) return;
        
        const href = link.getAttribute('href') || link.href || '';
        
        // Track WhatsApp clicks
        if (isWhatsAppUrl(href)) {
            e.preventDefault();
            trackWhatsAppClick(link);
            // Allow navigation after tracking
            setTimeout(() => {
                window.open(href, link.target || '_self');
            }, 100);
            return;
        }
        
        // Track tel: clicks
        if (isTelUrl(href)) {
            trackCallClick(link);
            // Allow default tel: behavior
            return;
        }
    }, 50);

    /**
     * Initialize tracking when DOM is ready
     */
    function initTracking() {
        // Use event delegation on document for better performance
        document.addEventListener('click', handleClick, {
            capture: true, // Capture phase to catch all clicks
            passive: false
        });

        // Also track programmatic clicks (if any)
        const originalOpen = window.open;
        window.open = function(url, target, features) {
            if (isWhatsAppUrl(url)) {
                const fakeLink = document.createElement('a');
                fakeLink.href = url;
                fakeLink.target = target || '_blank';
                trackWhatsAppClick(fakeLink);
            }
            return originalOpen.apply(this, arguments);
        };
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTracking);
    } else {
        initTracking();
    }

    // Push page view event
    pushEvent('page_view', {
        page_path: window.location.pathname,
        page_title: document.title
    });

})();
