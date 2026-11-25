# Privacy Policy — Cornerstone

**Last updated: 25 November 2026**

Cornerstone is a study app for CFA® and FRM® candidates, published by GroundLearn.

## The short version

**Cornerstone has no analytics, no crash reporting and no social login. It shows ads until you buy the one-time unlock (see Advertising below), and nothing about your studying goes to the ad service.
It works fully without an account, and nothing it stores about your studying leaves your
device unless you ask it to.**

The app uses the network for four things: advertising until you unlock, an optional
purchase, over-the-air updates, and an **optional account** that backs your progress
up. All four are described in full below. If you create no account and never buy the
unlock, the only outbound requests the app makes are the adverts and a check for a
content update.

## What the app stores on your device

All of the following is written to your device's local application storage. **Without an
account it stays there**, and creating one copies across only the study data identified
in the section on backup below:

| Data                                                        | Purpose                            |
| ----------------------------------------------------------- | ---------------------------------- |
| Chosen exam, level and Level III pathway                    | To show the right syllabus         |
| Topic mastery percentages                                   | To track progress                  |
| Review queue (question ids and due dates)                   | Spaced repetition scheduling       |
| Bookmarked cards and questions                              | To let you find them again         |
| Study day history                                           | Streak counting                    |
| Question and accuracy counts                                | Profile statistics                 |
| Display name                                                | Greeting on the home screen        |
| App settings (reminder, timed quizzes, list style)          | Preferences                        |
| Whether the one-time unlock or a promotional code is active | To unlock paid topic areas offline |

This data is removed when you uninstall the app or clear its storage from system settings.
**Without an account, nothing above is transmitted**, so we cannot access, recover, export
or delete it on your behalf.

## The one-time unlock

Cornerstone Plus is an optional one-time purchase. It opens every topic area beyond the free
ones and removes advertising. It is not a subscription and nothing renews. Anyone who was
already using the app before it was introduced keeps everything permanently, and anyone who
once held the earlier subscription keeps access too.

- **Payment is taken by the store you installed from** — Google Play on Android, the App
  Store on iPhone. We never see, receive or store your payment details. Billing and
  refunds are handled entirely by Google under your Play account, or by Apple under your
  Apple Account.
- **RevenueCat** (RevenueCat, Inc.) is used to check whether the unlock (or an earlier subscription) is held. When
  the app asks, it sends an anonymous identifier that RevenueCat itself generates for this
  installation, together with the purchase receipt the store issued and basic technical details
  such as the platform, app version and store country. **It is not linked to a name, an email
  address, a Google account or an Apple Account**, and none of your study data is sent.
- **If you never open the unlock screen and never buy**, no purchase-related
  request is made at all.

**Promotional codes on Android take no payment and involve no third party.** A code is checked
against a list inside the app and grants access for a fixed number of days. Nothing is
transmitted when you redeem one. **On iPhone, codes are Apple offer codes**, redeemed on Apple's
own screen and handled by Apple exactly like an App Store purchase.

## Accounts and progress backup

Creating an account is **optional**, and the app works exactly as it always has without
one. Nothing in the app asks you to sign up, and no feature is withheld if you do not.

If you do create one, your study progress is copied to a database we run on Supabase so
that it survives a reinstall or a new phone. What is copied is only what the table above
lists as study data:

- your display name, if you set one, and which exam, level and pathway you are studying
- how far through each topic you are, and how many questions you have answered
- your review queue, bookmarks and the days you studied
- your app settings

**What is never copied:** your purchase status, any promotional code you have
redeemed, and anything about your device. Your purchase already moves between devices
through your Google Play account or Apple Account, so it does not need to be here — and keeping it out
means nobody can grant themselves paid access by editing their own record.

- **Authentication is by email address and password**, handled by Supabase. We store the
  address so you can sign back in; we never see your password. Addresses are not
  currently verified, so please type yours carefully — it is how you sign back in.
- **Your data is locked to your account** at the database level. Every table enforces that
  a row can only be read or written by the account that owns it.
- **You can sign out at any time**, which leaves everything on the device untouched.
- **To delete your account and its backup**, use Profile → Account → Delete account in the app, or
  email the address below and it will be removed.

Backup is a best-effort copy rather than a live mirror: the app uploads when it can reach
the server and carries on normally when it cannot.

## Over-the-air updates

The app checks Expo's update service (Expo, operated by 650 Industries, Inc.) for a newer
version of its content and code. The request carries the app's version, update channel and
platform so that the right update is returned. No personal data and no study data is sent, and
nothing about you is stored by that service.

This is what lets a content correction or a retired promotional code reach you in minutes
rather than waiting for a store release.

## Advertising

Until you buy the one-time unlock, Cornerstone shows advertising: a small banner on the
Home, Topics, Review and Profile screens, and an occasional full-screen advert after you
finish a practice or mock sitting. It never appears in the middle of a question or a
sitting. The adverts are served by Google AdMob. **Buying the unlock removes them**, and
anyone who was using Cornerstone before advertising was introduced does not see any.

To show an advert, Google's advertising library collects and uses information from your
device — your IP address, the type and operating-system version of your device, the app
and its version, and an advertising or device identifier — in order to deliver and measure
adverts, limit how often you see one, and prevent fraud. The app requests **non-personalised adverts only**, on both Android and iPhone, so your adverts are not tailored to your interests. On iPhone it does not ask permission to track you. On Android you can reset or delete your advertising ID in your phone's settings. Where the law requires it — in the European Economic Area,
the United Kingdom and some other regions — Google's consent form is shown first, and if
you decline, no advert is requested. Google describes what it collects at
<https://policies.google.com/technologies/ads>, and its privacy policy is at
<https://policies.google.com/privacy>.

**Nothing about your studying is sent to the advertising service** — not your progress,
answers, mock results or email address. The app never asks it to profile you.

## Permissions

- **Internet** — used for the three purposes above, and for nothing else. Study content is
  bundled with the app and works fully offline.
- **Notifications** — requested only if you switch on the daily study reminder in Profile. It
  schedules a notification locally on your device; nothing is sent to a server. Declining it,
  or revoking it later in system settings, leaves the rest of the app fully functional.
- **Billing** — declared on Android so that Google Play can present the purchase
  sheet. On iPhone, purchases use Apple's built-in in-app purchase system and need no
  permission.

## Third parties

Cornerstone contains one advertising SDK (Google AdMob, shown until you unlock), no analytics SDKs,
no crash-reporting SDKs and no social login. The only third parties that receive anything are
Google AdMob (for adverts), Google Play or Apple (for payment), RevenueCat (for entitlement
checking), Expo's update service (for updates) and — only if you create an account — Supabase
(for the progress backup), each strictly as described above.

## Children

Cornerstone is intended for adult candidates pursuing professional finance certifications. It
is not directed at children.

## Trademarks and affiliation

Cornerstone is an independent study aid. It is not affiliated with, authorised by, endorsed by
or sponsored by CFA Institute or the Global Association of Risk Professionals.

CFA®, Chartered Financial Analyst® and GIPS® are registered trademarks owned by CFA Institute.
FRM®, Financial Risk Manager® and GARP® are trademarks owned by the Global Association of Risk
Professionals.

## Contact

Questions about this policy: **support@groundlearn.com**
