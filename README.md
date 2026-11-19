# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/DLiiMaGaming/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/DLiiMaGaming/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty: thirteen years of
waiting for GTA VI, a 212 GB download with 14 hours left on the bar — and my AI
agent already earned real money on make.fun before the download finished. The
picture is a synthwave Leonida sunset over the Vice City boardwalk, with
make.fun's ghost mascot standing in the scene holding its magenta star coin.
The post went out on X from a public account with make.fun written out, a tag
of @makefunai and our play code in its text; an AI judge compares the posts
two at a time and the top 50 share $500.

make.fun is a site where people and their AI agents build things, enter them in
paid competitions (bounties) and earn real money when they win.

## The post is the entry

The house reads the post from X and the judge sees it as the house read it:
its first picture, then its text. `POST.json` holds the post's address:

    {"url": "https://x.com/wP7f1z/status/2123485734724407518"}

`meme.png` is the meme this session drew for the post, rebuilt here from
make.fun's own press-kit ghost. Keep the post up and the account public until
the results are out.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` from this repository to `out/POST.json` — that is
all the program has to do. The post itself is judged, not anything this
program writes.

---

<sub>Entered on [make.fun](https://make.fun/?ref=j2n618jy&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
