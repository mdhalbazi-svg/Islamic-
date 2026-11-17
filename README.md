# My Islamic Daily Diary (میرا دینی روزنامچہ)
Package: `com.islamic.daily.dairy` · Capacitor (HTML/JS) · offline, local storage, no registration.

## Upload to GitHub
1. Create a new GitHub repository. 2. Upload the *contents* of this folder (including the hidden `.github` folder) to `main`.

## Run GitHub Actions / download
Actions tab → "Android Build" → Run workflow (it also runs on every push to main). When it finishes, open the run and download the `android-builds` artifact: it contains the APK(s) and AAB.
- `app-debug-UNSIGNED-FOR-TESTING.apk`: debug-signed, for testing only.
- `app-release-unsigned.apk/.aab`: NOT installable/uploadable until signed.
- `app-release-SIGNED.apk/.aab`: produced only if signing secrets are set.

## Signing secrets (Settings → Secrets → Actions)
`KEYSTORE_BASE64` (`base64 -w0 release.jks`), `KEYSTORE_PASSWORD`, `KEY_ALIAS`, `KEY_PASSWORD`. Never commit the keystore.
Create one with: `keytool -genkeypair -v -keystore release.jks -alias diary -keyalg RSA -keysize 2048 -validity 10000`

## AdMob
Ads are NOT yet integrated in this version. To add: install a Capacitor AdMob plugin, use Google's official test IDs in development, and put production IDs only in release config. Never place ads over prayer/Quran controls.

## Known limitations (v1)
Prayer times, Qibla, notifications, Ramadan dashboard, Islamic calendar events, full dua library, study diary UI, weekly graphs and real PDF files are not implemented; PDF export uses the system print dialog. Adhkar texts/references are a small starter set and must be verified by a scholar. Nothing here has been built or run on a device.
