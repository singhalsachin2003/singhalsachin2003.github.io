import sys,pathlib
brand=sys.argv[1] if len(sys.argv)>1 else "Groundwork"
url=sys.argv[2] if len(sys.argv)>2 else "https://singhalsachin2003.github.io/"
tag="Learn the foundations first"
t=pathlib.Path(__file__).with_name("index.template.html").read_text()
t=t.replace("__BRAND__",brand).replace("__URL__",url).replace("__TAGLINE__",tag)
pathlib.Path("out").mkdir(exist_ok=True)
pathlib.Path("out/index.html").write_text(t)
print("built",brand,url)
