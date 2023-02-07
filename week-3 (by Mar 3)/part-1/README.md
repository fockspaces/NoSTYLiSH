# Week 3 Part 1

## Build Cache Mechanism

You just build a demo web site which is sufficient for backend engineer. Now, turn back to backend field and build a cache mechanism.

## Cache Marketing Campaigns Data

Cache mechanism is very suitable for rarely updating data. For example, our **Marketing Campaings API** always response the same data to the front-end. If we store data in the web server memory, we can get it directly rather than database.

Follow the logics below to build a cache mechanism:

1. Every time we need campaign data, check cache first.
2. If data existed in the cache, get it.
3. If there is no data in the cache, get it from database and store in the cache.
4. If data is updated from database, clear cache.

## Cache Personal Profile Data

Similar procedure described above, we can add cache mechanism for **Profile API** to cache personal profiles for users. Alternatively, you can find other APIs suitable for using the caching mechanism, welcome to discuss with your mentor.

## Advanced Optional

Let's think a little more complicated, if campaigns have a release date and a close date, how do you design the cache update mechanism?

## Topic Discussion

- Try to understand Cache mechanism in general.
- Cache in different places (e.g. front-end, back-end, CPU, ...)
- Different caching patterns
- Figure out why Redis can improve the performance. What's the differencee between Memory and Disk.
