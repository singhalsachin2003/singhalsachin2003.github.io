---
title: Privacy Policy
permalink: /OTC_Learn/privacy/
---

# Privacy Policy for OTC Learn

**Last updated: 25 November 2026**

OTC Learn is an educational app about over-the-counter derivatives. This policy
describes what the app does and does not do with your information.

## Accounts are optional, and the app works without one

OTC Learn works with no account at all, which is how it has always worked and
how it still works if you never sign in. Everything below about what stays on
your device applies in full to an app you never sign into.

If you *choose* to create an account, we ask for an email address and a password
and nothing else — no phone number, location, contacts or photos. The account
exists for one purpose: so your progress survives reinstalling the app or
changing phone. You can sign out at any time, which leaves everything on your
device untouched, and there is still no way to contact other users.

The app asks for one permission, and only when you turn the feature on:
permission to show notifications, used for the optional daily study reminder.
That reminder is scheduled by your phone and shown by your phone — nothing is
sent to us, and there is no push service involved. Decline it, or turn it off in
the app or in system settings, and the app carries on working.

## What is stored on your device

The app saves the following locally, on your device only:

- **Your mastery score for each product**, along with how many attempts you have
  made and your best result, so your progress survives a restart.
- **Which questions you have answered right and wrong**, so quizzes can bring
  back what you have missed.
- **Your review queue** — the questions due to be resurfaced, and when.
- **Your daily streak**, as a count and the days you were active.
- **Your saved products and unlocked achievements.**
- **Your settings**, and **the name you type into your profile**, if you type one.
  You are not asked for it, it is not verified, and it is only used to say hello
  on the home screen.

**Without an account, this data never leaves your device.** It is not synced,
backed up to our servers, or shared with anyone, and uninstalling the app
deletes it.

**With an account, the same list is copied to our sync service** so it can be
restored on another device. Nothing extra is collected to do it — it is the
list above and your email address, and no more. It is stored with Supabase,
which processes it on our behalf; their privacy policy is at
<https://supabase.com/privacy>. Access is restricted so that only your own
account can read or write your rows.

You can delete the account and everything synced with it in the app, from
Profile → Account → Delete account, or by emailing the address at the bottom of
this policy. Signing out alone does not delete it —
that is the point of it.

## Crash reporting

**Crash reporting is switched off.** The app does not send us error reports, and
we have no visibility into problems you encounter.

The app contains the Sentry crash-reporting library, but it is inert without a
configuration key and no released version ships one. On Android the library's
own `io.sentry.auto-init` flag is set to `false` in the app you install, so it
does not start itself either; on iPhone the library only starts when the app
starts it, which it does not do without the key.

If a future version turns it on, this policy and the app's store privacy
disclosures (Google Play's Data safety section and the App Store's App Privacy
details) will be updated **before** that version is released, and both will
declare crash data. Such a report would contain
technical information only — the error and where in the code it happened, the
app version, the device model and OS version — and never your progress, your
streak, your notes, or your email address. Performance tracing is disabled
separately and would stay off.

## Purchases

The app offers a one-time unlock that opens the whole catalogue and removes
advertising, through the store you installed it from — Google Play on Android,
the App Store on iPhone — and RevenueCat. A free sample is open to everyone, so
the app remains useful without buying anything.

If you do buy, the purchase is made by Google Play or by Apple, and they — not
us — handle your payment details. Offer codes on iPhone are redeemed with Apple
in the same way. We never see or store a card number. RevenueCat
records that a purchase happened, against an identifier of its own that is not
your name or email, so the app can tell whether this device has paid access.
Their privacy policy is at <https://www.revenuecat.com/privacy>.

**A purchase is not tied to an account.** The app deliberately does not tell
RevenueCat who you are, even when you are signed in. Google Play restores a
purchase through the Google account that made it, and the App Store through the
Apple Account that made it. Buying therefore requires no
account with us, and signing in reveals nothing about what you have bought.

## Checking for updates

The app contacts Expo's update service (`u.expo.dev`) when it starts, to see
whether a corrected version of the app's code is available. That request
contains a random identifier generated when you install the app, the platform
name, and the app's version. It contains no personal information, is not linked
to you or to any account, and is not used for advertising, profiling or
analytics. The identifier changes if you reinstall the app.

Expo processes this on our behalf; their privacy policy is at
<https://expo.dev/privacy>.

Apart from this update check, an app you never sign into makes one other kind
of request: it asks RevenueCat whether this device has paid access, so that a
purchase is honoured on a device you have not signed into. That request carries
the anonymous identifier described under Purchases, and nothing about you or
how you use the app. Signing in adds requests to the sync service described
above, and only while you are signed in.

## Children

OTC Learn is intended for an adult, professional audience learning about
financial products. It is not directed at children, it collects no information
from anyone, including children, and its adverts are limited to a general
audience.

## Advertising

Until you buy the one-time unlock, the app shows advertising: a small banner on
the browsing screens, and an occasional full-screen advert after you finish a
quiz. It never appears in the middle of a lesson or a question. The adverts are
served by Google AdMob. **Buying the unlock removes them**, and anyone who was
using the app before advertising was introduced does not see any.

To show an advert, Google's advertising library collects and uses information
from your device — your IP address, the type and operating-system version of your
device, the app and its version, and an advertising or device identifier — in
order to deliver and measure adverts, limit how often you see one, and prevent
fraud. On Android, adverts may be personalised using your Android advertising ID,
which you can reset or delete in your phone's settings. **On iPhone the app does
not ask permission to track you, and requests non-personalised adverts only.**
Where the law requires it — in the European Economic Area, the United Kingdom and
some other regions — Google's consent form is shown first, and if you decline, no
advert is requested. Google's own description of what it collects is at
<https://policies.google.com/technologies/ads>, and its privacy policy is at
<https://policies.google.com/privacy>.

**Nothing about your studying is sent to the advertising service** — not your
progress, your answers, your notes or your email address. The app never asks the
advertising service to profile you, and no other third-party analytics or
tracking is used. Neither the sync service nor the purchase service is used to
profile you or to advertise to you, and neither receives anything about how you
use the app beyond what is described above. The update check described above is
not analytics: it asks one question — is there a newer version of the code — and
carries nothing about how you use the app.

## Changes to this policy

If this policy changes, the "last updated" date above will change with it. Any
change that affects what leaves your device will be reflected in Google Play's
Data safety section and the App Store's App Privacy details as well.

## Contact

Questions about this policy: email <support@groundlearn.com>.
