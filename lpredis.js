var metrics = [

  { "alias": "blocked clients", "target": "stats.eightball01.redis.blocked_clients" },
  { "alias": "clients",         "target": "stats.eightball01.redis.connected_clients" },
  { "alias": "conn total",      "target": "stats.eightball01.redis.total_connections_received" },
  { "alias": "conn rate",       "target": "summarize(derivative(stats.eightball01.redis.total_connections_received), '1min')" },
  { "alias": "hits",            "target": "stats.eightball01.redis.keyspace_hits" },
  { "alias": "hit rate",        "target": "summarize(derivative(stats.eightball01.redis.keyspace_hits), '1min')" },
  { "alias": "misses",          "target": "stats.eightball01.redis.keyspace_misses" },
  { "alias": "miss rate",       "target": "summarize(derivative(stats.eightball01.redis.keyspace_misses), '1min')" },
  { "alias": "latest fork",     "target": "stats.eightball01.redis.latest_fork_usec" },
  { "alias": "cmd total",       "target": "stats.eightball01.redis.total_commands_processed" },
  { "alias": "cmd rate",        "target": "summarize(derivative(stats.eightball01.redis.total_commands_processed),'1min')" },
  { "alias": "cpu sys",         "target": "stats.eightball01.redis.used_cpu_sys" },
  { "alias": "cpu sys child",   "target": "stats.eightball01.redis.used_cpu_sys_children" },
  { "alias": "cpu user",        "target": "stats.eightball01.redis.used_cpu_user" },
  { "alias": "cpu user child",  "target": "stats.eightball01.redis.used_cpu_user_children" },
  { "alias": "mem used",        "target": "stats.eightball01.redis.used_memory" },
  { "alias": "mem used rate",   "target": "summarize(derivative(stats.eightball01.redis.used_memory),'1min')" },
  { "alias": "mem rss",         "target": "stats.eightball01.redis.used_memory_rss" },
  { "alias": "mem rss rate",    "target": "summarize(derivative(stats.eightball01.redis.used_memory_rss),'1min')" },
  { "alias": "mem frag",        "target": "stats.eightball01.redis.mem_fragmentation_ratio" }
]
