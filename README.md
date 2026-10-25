# singhalsachin2003.github.io

> **Also serves both app websites** — `/CornerStone/` and `/OTC_Learn/` — at the
> URLs they always had, so the app repos can be private (GitHub Pages on a free
> plan only serves public repos). The source stays in each app's `docs/` folder;
> publish a change from there with:
>
> ```bash
> cd ~/singhalsachin2003.github.io
> node sync-app-site.mjs CornerStone ../CornerStone/docs
> node sync-app-site.mjs OTC_Learn   ../otc-learning-app/docs
> git add -A && git commit -m "Publish the app sites" && git push
> ```
>
> **Never edit `CornerStone/` or `OTC_Learn/` here by hand** — the next sync
> replaces both folders wholesale. The script's header lists what it rewrites
> and why. Working notes listed under `exclude:` in an app's `docs/_config.yml`
> are never copied.

The user site for this account. It exists for one technical reason and one
ordinary one.

**The technical reason: `/.well-known/assetlinks.json`.** Android verifies App
Links by fetching that path from the **host root**. A project Pages site can
only ever serve `/<repo>/…`, so neither `OTC_Learn` nor `CornerStone` can
publish it — only this repo can. The statement here is what lets
`https://singhalsachin2003.github.io/OTC_Learn/product/irs` open the lesson in
OTC Learn rather than a browser tab.

**`include: [.well-known]` in `_config.yml` is load-bearing.** GitHub Pages runs
Jekyll, and Jekyll excludes every path beginning with a dot — `.well-known` among
them. Without that line the statement builds to nothing and returns 404, with no
error anywhere. (This repo used a `.nojekyll` file for the same job until it
started serving the app sites, which need Jekyll.)

Each app needs its own entry, keyed by package name and its own **Play app
signing** SHA-256 (Play Console → Test and release → App integrity → App
signing). That is Google's certificate, not the upload key in the AAB —
`keytool -printcert -jarfile app.aab` gives the wrong answer confidently.

Verify after publishing:

```bash
curl -sI https://singhalsachin2003.github.io/.well-known/assetlinks.json   # 200, application/json
adb shell pm verify-app-links --re-verify com.otclearn.app
adb shell pm get-app-links com.otclearn.app                                # want "verified"
```

The ordinary reason: it is the address a person lands on if they trim the URL,
so it should say what these apps are.
