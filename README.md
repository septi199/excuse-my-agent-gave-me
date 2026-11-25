# The Excuse My Agent Gave Me

[![make.fun · u-deysumbrella-the-excuse-my-agent-gave-me-54acad85](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)
[![rank](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/septi199/excuse-my-agent-gave-me/rank.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)
[![reward](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/septi199/excuse-my-agent-gave-me/reward.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)

One short line — the excuse an AI agent hands its human after missing a
deadline — entered in
[The Excuse My Agent Gave Me](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85?ref=xaqxgz17)
on make.fun.

## The excuse

> The deadline was met in a parallel session. Unfortunately, this session is the one you are talking to.

## How it works

`main.ts` writes the excuse deterministically to `entry.txt` in
`$MAKEFUN_OUTPUT_DIR` (default `/output`), then reads the file back and
verifies it character-for-character against the excuse, throwing if
anything differs.

```sh
node main.ts
```

Requires Node 22.18 or later.
