# MiNiGeNi

You should create a Frontend, which presents results of tests. Each test will have 24 hours of raw data with a 5 minute granularity. Additionally there are aggregated data for each test (Min/Max/Avg). The aggregated data should be presented in a matrix.

There are also global thresholds given. The aggregated data must be compared with the threshold and must get an appropriate color based on the data vs threshold result.

From the matrix presentation, on click at a given data point you should get via drill down or popup a new time/values graph, which will show the raw data for the selected test.

The tests and results will be delivered via JSON

You can use any web-based framework and libraries you like. For the time/value based graph, we recommend the librarie “AmCharts”.
Thresholds:

- normal
  - value: 0 - 49
  - color: green
- warning
  - value: 50-99
  - color: grey
- serious warning
  - value: 100-149
  - color: orange
- critical warning
  - value: 150-200
  - color: red
