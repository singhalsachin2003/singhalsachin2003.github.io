# singhalsachin2003.github.io

The user site for this account. It exists for one technical reason and one
ordinary one.

**The technical reason: `/.well-known/assetlinks.json`.** Android verifies App
Links by fetching that path from the **host root**. A project Pages site can
only ever serve `/<repo>/…`, so neither `OTC_Learn` nor `CornerStone` can
publish it — only this repo can. The statement here is what lets
`https://singhalsachin2003.github.io/OTC_Learn/product/irs` open the lesson in
OTC Learn rather than a browser tab.

**`.nojekyll` is load-bearing.** GitHub Pages runs Jekyll by default, and Jekyll
excludes every path beginning with a dot — `.well-known` among them. Without
that file the statement builds to nothing and returns 404, with no error
anywhere. Do not delete it.

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
