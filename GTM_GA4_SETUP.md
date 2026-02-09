# Google Tag Manager & GA4 Conversion Tracking Setup Guide
## TriArch Studio Landing Page

**Measurement ID:** `G-HJ69YW1E5N`  
**Container ID:** `GTM-T22LPDXQ`

---

## ✅ Implementation Status

- [x] GTM container code installed in HTML (head + body)
- [x] Conversion tracking JavaScript implemented
- [x] WhatsApp click tracking (all variations)
- [x] Call click tracking (all tel: links)
- [x] Duplicate prevention mechanism
- [x] Performance optimized

---

## 📋 GTM Configuration Steps

### Step 1: Create GA4 Configuration Tag

1. **Go to GTM Workspace** → Tags → New
2. **Tag Configuration:**
   - Tag Type: `Google Analytics: GA4 Configuration`
   - Measurement ID: `G-HJ69YW1E5N`
   - Triggering: `All Pages`

3. **Advanced Settings:**
   - Enable `Send page view` (checked)
   - Fields to Set:
     ```
     page_title: {{Page Title}}
     page_location: {{Page URL}}
     ```

4. **Save** as: `GA4 - Configuration`

---

### Step 2: Create WhatsApp Click Event Tag

1. **Tags → New**
2. **Tag Configuration:**
   - Tag Type: `Google Analytics: GA4 Event`
   - Configuration Tag: Select `GA4 - Configuration`
   - Event Name: `whatsapp_click`
   
3. **Event Parameters:**
   ```
   button_type: {{Button Type}}
   section: {{Section Name}}
   url: {{Click URL}}
   text: {{Click Text}}
   ```

4. **Triggering:**
   - Trigger Type: `Custom Event`
   - Event name: `whatsapp_click`
   - This trigger fires on: `Custom Event`

5. **Save** as: `GA4 - WhatsApp Click`

---

### Step 3: Create Call Click Event Tag

1. **Tags → New**
2. **Tag Configuration:**
   - Tag Type: `Google Analytics: GA4 Event`
   - Configuration Tag: Select `GA4 - Configuration`
   - Event Name: `call_click`
   
3. **Event Parameters:**
   ```
   button_type: {{Button Type}}
   section: {{Section Name}}
   phone_number: {{Phone Number}}
   text: {{Click Text}}
   ```

4. **Triggering:**
   - Trigger Type: `Custom Event`
   - Event name: `call_click`
   - This trigger fires on: `Custom Event`

5. **Save** as: `GA4 - Call Click`

---

### Step 4: Create Variables (Optional but Recommended)

#### Variable: Button Type
- Type: `Data Layer Variable`
- Data Layer Variable Name: `button_type`
- Default Value: `unknown`

#### Variable: Section Name
- Type: `Data Layer Variable`
- Data Layer Variable Name: `section`
- Default Value: `unknown`

#### Variable: Click URL
- Type: `Data Layer Variable`
- Data Layer Variable Name: `url`
- Default Value: (empty)

#### Variable: Click Text
- Type: `Data Layer Variable`
- Data Layer Variable Name: `text`
- Default Value: (empty)

#### Variable: Phone Number
- Type: `Data Layer Variable`
- Data Layer Variable Name: `phone_number`
- Default Value: (empty)

---

## 📊 GA4 Configuration Steps

### Step 1: Verify GA4 Property

1. Go to **Google Analytics** → Admin → Property Settings
2. Verify Measurement ID: `G-HJ69YW1E5N`
3. Ensure **Enhanced measurement** is enabled

---

### Step 2: Create Conversion Events

#### WhatsApp Click Conversion

1. **GA4 Admin** → Events
2. Click **Create Event**
3. **Event Name:** `whatsapp_click`
4. **Matching Conditions:**
   ```
   Event name equals whatsapp_click
   ```
5. **Parameters:** (optional, for debugging)
   - `button_type`
   - `section`
   - `url`
   - `text`
6. **Mark as conversion:** ✅ Check this box
7. **Save**

#### Call Click Conversion

1. **GA4 Admin** → Events
2. Click **Create Event**
3. **Event Name:** `call_click`
4. **Matching Conditions:**
   ```
   Event name equals call_click
   ```
5. **Parameters:** (optional, for debugging)
   - `button_type`
   - `section`
   - `phone_number`
   - `text`
6. **Mark as conversion:** ✅ Check this box
7. **Save**

---

### Step 3: Verify Events in Real-Time

1. Go to **GA4** → Reports → **Realtime**
2. Click on your website
3. Click a WhatsApp button → Should see `whatsapp_click` event
4. Click a Call button → Should see `call_click` event
5. Verify event parameters are being captured

---

## 🎯 Google Ads Conversion Import

### Step 1: Link GA4 to Google Ads

1. **Google Ads** → Tools & Settings → **Linked accounts**
2. Click **Google Analytics (GA4)**
3. Select your GA4 property (`G-HJ69YW1E5N`)
4. Click **Link**
5. Enable **Import site metrics**

---

### Step 2: Import Conversions

1. **Google Ads** → Tools & Settings → **Conversions**
2. Click **+ New conversion action**
3. Select **Import**
4. Choose **Google Analytics (GA4)**
5. Select conversions:
   - ✅ `whatsapp_click`
   - ✅ `call_click`
6. Click **Import and continue**
7. Set conversion values (if applicable)
8. **Save**

---

### Step 3: Configure Conversion Settings

For each imported conversion:

1. **Conversion name:** Keep as is or customize
2. **Category:** 
   - WhatsApp: `Lead`
   - Call: `Lead`
3. **Value:** Set if you have a value per conversion
4. **Count:** `One` (each click = one conversion)
5. **Attribution model:** `Data-driven` (recommended)
6. **Include in "Conversions":** ✅ Yes
7. **Save**

---

## ✅ Verification Checklist

### GTM Preview Mode Testing

1. **Open GTM Preview Mode**
2. Enter your website URL
3. **Test WhatsApp Click:**
   - Click any WhatsApp button/link
   - Verify `whatsapp_click` event fires
   - Check event parameters in Tags Fired
   - Verify only ONE event fires per click
   - Test multiple WhatsApp buttons → Each should fire once

4. **Test Call Click:**
   - Click any tel: link/button
   - Verify `call_click` event fires
   - Check event parameters in Tags Fired
   - Verify only ONE event fires per click
   - Test multiple call buttons → Each should fire once

5. **Verify No Duplicates:**
   - Click same button multiple times quickly
   - Should only fire once per physical click
   - Check Tags Fired panel for duplicates

---

### GA4 DebugView Testing

1. **Enable DebugView:**
   - Install GA Debugger Chrome Extension, OR
   - Add `?debug_mode=true` to URL, OR
   - Use GA4 DebugView directly

2. **Test Events:**
   - Click WhatsApp button → See `whatsapp_click` in DebugView
   - Click Call button → See `call_click` in DebugView
   - Verify event parameters
   - Check timestamps (should be unique per click)

3. **Verify Conversions:**
   - Go to **Admin → Events**
   - Check `whatsapp_click` and `call_click` are marked as conversions
   - Verify they appear in **Conversions** report

---

### Production Verification

1. **Deploy GTM Container:**
   - GTM → Submit → Publish
   - Version name: `Conversion Tracking v1.0`
   - Description: `Initial conversion tracking setup`

2. **Test on Live Site:**
   - Clear browser cache
   - Test WhatsApp clicks (all variations)
   - Test Call clicks (all buttons)
   - Verify in GA4 Realtime report

3. **Monitor for 24-48 hours:**
   - Check GA4 Realtime for events
   - Verify no duplicate events
   - Check conversion counts match expectations

---

## 🔍 Troubleshooting

### Issue: Events Not Firing

**Check:**
- GTM container ID is correct: `GTM-T22LPDXQ`
- GTM Preview Mode shows container loaded
- JavaScript console shows `dataLayer.push` calls
- No JavaScript errors blocking execution

**Solution:**
- Verify GTM container code is in HTML
- Check `conversion-tracking.js` is loaded
- Use browser DevTools → Network tab to verify script loads

---

### Issue: Duplicate Events

**Check:**
- GTM Preview Mode → Tags Fired panel
- Verify only one tag fires per click
- Check if multiple triggers are attached

**Solution:**
- Ensure triggers use Custom Event type only
- Don't use "Click - All Elements" triggers
- Verify `clickedElements` WeakSet is working

---

### Issue: Conversions Not Importing to Google Ads

**Check:**
- GA4 and Google Ads are linked
- Events are marked as conversions in GA4
- At least 24 hours have passed
- Conversion count > 0 in GA4

**Solution:**
- Re-link accounts if needed
- Verify conversion events in GA4 Admin
- Wait 24-48 hours for sync
- Check Google Ads → Conversions → Import section

---

## 📈 Performance Notes

- **Script Size:** ~3KB minified
- **Load Time:** Non-blocking, async
- **Event Tracking:** Uses event delegation (single listener)
- **Memory:** Uses WeakSet for efficient duplicate prevention
- **Debouncing:** 50ms to prevent rapid-fire clicks

---

## 🎯 Expected Behavior

### WhatsApp Clicks Tracked:
- ✅ Floating WhatsApp button (bottom right)
- ✅ Any `wa.me/` links
- ✅ Any `api.whatsapp.com` links
- ✅ Any `whatsapp.com` links

### Call Clicks Tracked:
- ✅ Floating phone button (bottom left)
- ✅ "Make an Appointment" button
- ✅ "Contact Us Today" button
- ✅ "Schedule Your Visit" button
- ✅ "Book Your Console Service Today" button
- ✅ Any `tel:` links

### Event Data Captured:
- Button type (floating, primary, secondary, link)
- Section name (hero, about, nata-training, etc.)
- URL or phone number
- Button text

---

## 📝 Notes

- **No Auto-Click Tracking:** Only custom events are used
- **Zero Duplicates:** WeakSet prevents duplicate tracking
- **Production Safe:** Error handling and performance optimized
- **Mobile Compatible:** Works on all devices
- **Privacy Compliant:** No PII collected, only conversion events

---

## 🚀 Next Steps

1. ✅ Deploy GTM container
2. ✅ Verify events in GTM Preview
3. ✅ Confirm events in GA4 DebugView
4. ✅ Mark events as conversions in GA4
5. ✅ Import conversions to Google Ads
6. ✅ Monitor for 24-48 hours
7. ✅ Optimize campaigns based on conversion data

---

**Last Updated:** 2026-02-05  
**Version:** 1.0  
**Status:** Production Ready ✅
