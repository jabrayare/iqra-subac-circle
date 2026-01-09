# 🚀 Deployment Guide for Iqra Website

## 📋 **Deployment Checklist**

### **Prerequisites**
- [ ] Node.js 18+ installed
- [ ] Git repository created
- [x] **Deployed to Vercel:** `https://iqra-subac-circle-vercel-git-main-jabros-projects.vercel.app`
- [ ] Professional email addresses set up (optional)

## 🌐 **Option 1: Vercel Deployment (Recommended)**

### **Step 1: Prepare for Deployment**

1. **Navigate to website directory:**
```bash
cd "/Users/jibrilmohamed/Documents/projects/Mobile Apps/iqra-subac-circle/website"
```

2. **Install dependencies:**
```bash
npm install
```

3. **Test locally:**
```bash
npm run dev
```
Visit `http://localhost:3000` to verify everything works.

### **Step 2: Push to GitHub**

1. **Initialize Git repository:**
```bash
git init
git add .
git commit -m "Initial commit: Iqra website"
```

2. **Create GitHub repository:**
   - Go to https://github.com/new
   - Repository name: `iqra-subac-circle`
   - Make it public for easier deployment

3. **Push to GitHub:**
```bash
git remote add origin git@github.com:jabrayare/iqra-subac-circle.git
git branch -M main
git push -u origin main
```

### **Step 3: Deploy to Vercel**

1. **Go to Vercel:** https://vercel.com
2. **Sign up/Login** with GitHub account
3. **Click "New Project"**
4. **Import** your `iqra-subac-circle` repository
5. **Configure project:**
   - Framework Preset: Next.js
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

6. **Add Environment Variables:**
```
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

7. **Click "Deploy"**

### **Step 4: ✅ Deployment Complete!**

**Your website is now live at:**
`https://iqra-subac-circle-vercel-git-main-jabros-projects.vercel.app`

**Optional: Configure Custom Domain**
1. **Purchase a custom domain** (e.g., `iqra-subac.com`)
2. **In Vercel Dashboard:**
   - Go to your project settings
   - Click "Domains"
   - Add your custom domain
3. **Update DNS Records** as instructed by Vercel

## 🌐 **Option 2: Netlify Deployment**

### **Step 1: Build the Project**
```bash
npm run build
npm run export
```

### **Step 2: Deploy to Netlify**
1. Go to https://netlify.com
2. Drag and drop the `out` folder
3. Configure custom domain in site settings

## 📧 **Email Setup (Google Workspace)**

### **Step 1: Purchase Google Workspace**
- Go to https://workspace.google.com
- Choose Business Starter plan ($6/user/month)
- Use domain `iqra-subac.com`

### **Step 2: Create Email Addresses**
Create these professional addresses:
- `support@iqra-subac.com`
- `privacy@iqra-subac.com`
- `legal@iqra-subac.com`
- `admin@iqra-subac.com`
- `hello@iqra-subac.com`

### **Step 3: Configure MX Records**
Add these MX records to your domain:
```
Priority: 1  | Host: @  | Value: smtp.google.com
Priority: 5  | Host: @  | Value: smtp2.google.com
Priority: 5  | Host: @  | Value: smtp3.google.com
Priority: 10 | Host: @  | Value: smtp4.google.com
```

## 🔧 **Post-Deployment Configuration**

### **1. Update iOS App URLs**

Update `PrivacyView.swift` with real URLs:

```swift
private func openPrivacyPolicy() {
    if let url = URL(string: "https://iqra-subac-circle-vercel-git-main-jabros-projects.vercel.app/privacy") {
        openURL(url)
    }
}

private func openTermsOfService() {
    if let url = URL(string: "https://iqra-subac-circle-vercel-git-main-jabros-projects.vercel.app/terms") {
        openURL(url)
    }
}

private func openSupportEmail() {
    if let url = URL(string: "mailto:support@iqra-subac.com") {
        openURL(url)
    }
}
```

### **2. App Store Connect Configuration**

In App Store Connect, add:
- **Privacy Policy URL:** `https://iqra-subac-circle-vercel-git-main-jabros-projects.vercel.app/privacy`
- **Support URL:** `https://iqra-subac-circle-vercel-git-main-jabros-projects.vercel.app/support`
- **Marketing URL:** `https://iqra-subac-circle-vercel-git-main-jabros-projects.vercel.app/app`

### **3. Google Analytics Setup**

1. **Create Google Analytics account:**
   - Go to https://analytics.google.com
   - Create property for your website
   - Get tracking ID (GA4)

2. **Update Vercel environment variables:**
   - Add `NEXT_PUBLIC_GA_ID=your-tracking-id`

### **4. SEO Configuration**

1. **Google Search Console:**
   - Go to https://search.google.com/search-console
   - Add property for `https://iqra-subac-circle-vercel-git-main-jabros-projects.vercel.app`
   - Verify ownership via HTML file upload

2. **Submit Sitemap:**
   - Your sitemap is at: `https://iqra-subac-circle-vercel-git-main-jabros-projects.vercel.app/sitemap.xml`
   - Submit to Google Search Console

## 📊 **Monitoring & Maintenance**

### **Performance Monitoring**
- **Vercel Analytics:** Built-in performance monitoring
- **Google PageSpeed Insights:** Test website speed
- **GTmetrix:** Comprehensive performance analysis

### **Regular Updates**
1. **Content Updates:**
   - Update privacy policy as needed
   - Add new testimonials
   - Update app screenshots

2. **Security Updates:**
   - Keep dependencies updated: `npm audit`
   - Monitor for vulnerabilities
   - Update SSL certificates (automatic with Vercel)

## 🔍 **Testing Checklist**

Before going live, test:

### **Functionality Testing**
- [ ] All pages load correctly
- [ ] Navigation works on mobile and desktop
- [ ] Contact forms work (if implemented)
- [ ] Email links open correctly
- [ ] Download links work

### **Performance Testing**
- [ ] Page load speed < 3 seconds
- [ ] Mobile responsiveness
- [ ] Dark/light mode switching
- [ ] Smooth animations

### **SEO Testing**
- [ ] Meta tags display correctly
- [ ] Open Graph images work
- [ ] Structured data is valid
- [ ] All pages indexed by Google

## 💰 **Cost Summary**

### **Current Setup (Free)**
- **Hosting:** $0 (Vercel free tier)
- **SSL:** $0 (included with Vercel)
- **Domain:** $0 (using free Vercel subdomain)

### **Optional Upgrades**
- **Custom Domain:** $15/year (.com)
- **Professional Email:** $72/year (Google Workspace)

**Current Cost:** **FREE** 🎉
**With Custom Domain:** ~$87/year

## 🚨 **Troubleshooting**

### **Common Issues**

1. **Build Fails:**
   ```bash
   # Clear cache and reinstall
   rm -rf .next node_modules
   npm install
   npm run build
   ```

2. **Domain Not Working:**
   - Check DNS propagation: https://whatsmydns.net
   - DNS changes can take 24-48 hours
   - Verify DNS records are correct

3. **Images Not Loading:**
   - Add image domains to `next.config.js`
   - Optimize images for web
   - Check file paths are correct

4. **Analytics Not Working:**
   - Verify GA_ID environment variable
   - Check browser ad blockers
   - Wait 24-48 hours for data to appear

## 📞 **Support Contacts**

### **Technical Issues**
- **Vercel Support:** https://vercel.com/support
- **Domain Issues:** Your domain registrar support
- **Google Workspace:** https://support.google.com

### **Development Support**
- **Next.js Documentation:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/

## 🎯 **Success Metrics**

Track these KPIs post-launch:

### **Performance Metrics**
- Page load speed < 2 seconds
- 95+ Lighthouse score
- 0% error rate

### **Business Metrics**
- App download conversion rate > 5%
- Email signup rate > 2%
- Return visitor rate > 30%

### **SEO Metrics**
- Organic search traffic growth
- Keyword rankings for "Islamic app", "prayer times"
- Backlink acquisition

---

## 🚀 **Ready to Deploy?**

1. **Complete the checklist above**
2. **Test everything locally**
3. **Deploy to Vercel**
4. **Configure custom domain**
5. **Set up professional emails**
6. **Update iOS app URLs**
7. **Submit to App Store**

Your modern, professional website will be live and ready to support your iOS app's App Store submission!