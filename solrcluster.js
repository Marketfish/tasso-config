var metrics = [
  { "alias": "solr_load", "target": "averageSeries(stats.solrcloud*.load_avg.one)" },
  { "alias": "solr_heap", "target": "averageSeries(stats.solrcloud*.solr.jvm.memory.used%)" },
  { "alias": "solr_docs", "target": "sumSeries(stats.solrcloud*.solr.filterservice.filterservice.shard*.searcher.numDocs)" },
  { "alias": "solr_commits", "target": "sumSeries(stats.solrcloud*.solr.filterservice.filterservice.shard*.updateHandler.commits)" },
  { "alias": "solr_adds", "target": "sumSeries(stats.solrcloud*.solr.filterservice.filterservice.shard*.updateHandler.cumulative_adds)" },

  { "alias": "solr_load", "target": "sumSeries(stats.solrcloud*.solr.filterservice.filterservice.shard*.updateHandler.deletesByQuery)" },
  { "alias": "solr_version", "target": "sumSeries(stats.solrcloud*.solr.filterservice.filterservice.shard*.searcher.indexVersion)" }
];
