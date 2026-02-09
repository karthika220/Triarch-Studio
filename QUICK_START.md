# Quick Start Guide - Conversion Tracking
## TriArch Studio Landing Page

## 🚀 Quick Setup (5 Minutes)

### 1. Files Already Installed ✅
- `index.html` - GTM container code added
- `conversion-tracking.js` - Conversion tracking script created
- Both files are ready to use

### 2. GTM Configuration (3 steps)

#### Step 1: GA4 Configuration Tag
- Tag Type: `Google Analytics: GA4 Configuration`
- Measurement ID: `G-HJ69YW1E5N`
- Trigger: `All Pages`

#### Step 2: WhatsApp Event Tag
- Tag Type: `Google Analytics: GA4 Event`
- Event Name: `whatsapp_click`
- Trigger: Custom Event → `whatsapp_click`

#### Step 3: Call Event Tag
- Tag Type: `Google Analytics: GA4 Event`
- Event Name: `call_click`
- Trigger: Custom Event → `call_click`

### 3. GA4 Configuration (2 steps)

#### Step 1: Mark Events as Conversions
- GA4 → Admin → Events
- Find `whatsapp_click` → Mark as conversion ✅
- Find `call_click` → Mark as conversion ✅

#### Step 2: Import to Google Ads
- Google Ads → Conversions → Import
- Select GA4 conversions
- Import `whatsapp_click` and `call_click`

### 4. Test & Verify

1. **GTM Preview Mode:**
   - Click WhatsApp button → See `whatsapp_click` event
   - Click Call button → See `call_click` event

2. **GA4 Realtime:**
   - Verify events appear in real-time report

3. **Deploy:**
   - GTM → Submit → Publish

## 📊 What Gets Tracked

### WhatsApp Clicks:
- All `wa.me/` links
- Floating WhatsApp button
- Any WhatsApp-related links

### Call Clicks:
- All `tel:` links
- Floating phone button
- All "Make Appointment" buttons
- All "Contact" buttons

## ✅ Verification Checklist

- [ ] GTM container loads (check browser console)
- [ ] Conversion tracking script loads
- [ ] WhatsApp clicks fire `whatsapp_click` event
- [ ] Call clicks fire `call_click` event
- [ ] No duplicate events (one per click)
- [ ] Events appear in GA4 Realtime
- [ ] Events marked as conversions in GA4
- [ ] Conversions imported to Google Ads

## 🆘 Quick Troubleshooting

**Events not firing?**
- Check GTM container ID: `GTM-T22LPDXQ`
- Verify `conversion-tracking.js` is loaded
- Check browser console for errors

**Duplicate events?**
- Verify triggers use "Custom Event" only
- Don't use "Click - All Elements" triggers

**Conversions not in Google Ads?**
- Wait 24-48 hours after import
- Verify events are marked as conversions in GA4
- Check GA4 → Conversions report

---

**For detailed setup, see:** `GTM_GA4_SETUP.md`
