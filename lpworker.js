var metrics = [
  {
    "alias": 'lpworker_total',
    "target": "sumSeries(stats.*.lpworker.records_per_second.*)"
  },
  {
    "alias": 'services01_load',
    "target": "stats.services01.load_avg.one",
    "warning": 1,
    "critical": 2
  },
  {
    "alias": 'services01_load',
    "target": "sumSeries(stats.services01.lpworker.records_per_second.*)",
  }
];
