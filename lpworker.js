var metrics = [

  { "alias": "solr_load", "target": "averageSeries(stats.solrcloud*.load_avg.one)" },
  { "alias": 'lpredis_queue', "target": "stats.eightball01.redis.indexingQueue01.llen" },
  { "alias": "listproc_load", "target": "stats.listprocessing01.load_avg.one" },
  {
    "alias": 'total rate',
    "target": "sumSeries(stats.*.lpworker.records_per_second.*)"
  },
  {
    "alias": 'services01_load',
    "target": "stats.services01.load_avg.one",
    "warning": 1,
    "critical": 2
  },
  {
    "alias": 'services01_rate',
    "target": "sumSeries(stats.services01.lpworker.records_per_second.*)",
  },
  {
    "alias": 'workhorse01_load',
    "target": "stats.workhorse01.load_avg.one",
    "warning": 1,
    "critical": 2
  },
  {
    "alias": 'workhorse01_rate',
    "target": "sumSeries(stats.workhorse01.lpworker.records_per_second.*)",
  },
  {
    "alias": 'workhorse02_load',
    "target": "stats.workhorse02.load_avg.one",
    "warning": 1,
    "critical": 2
  },
  {
    "alias": 'workhorse02_rate',
    "target": "sumSeries(stats.workhorse02.lpworker.records_per_second.*)",
  },
  {
    "alias": 'lpworker01_load',
    "target": "stats.lpworker01.load_avg.one",
    "warning": 1,
    "critical": 2
  },
  {
    "alias": 'lpworker01_rate',
    "target": "sumSeries(stats.lpworker01.lpworker.records_per_second.*)",
  }
];
