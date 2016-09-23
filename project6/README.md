# List of files in the submission:
1. README.md(this file): a description of the submission.
2. baseball.csv: the original data file.
3. data.csv: the processed data file for visualization.
4. data.ipynb: code to get data.csv
5. labels.md : note for labels and their value.
6. index00.html: the first version of the visualization.
7. index01.html: the second version of the visualization after the first feedback.
8. index02.html:  visualization after the first review.
9. index03.html:  fix the problem.
10. index04.html:  Adjust the order, fix Initial design


# Initial design:
+ avg and HR are 2 important evaluation indicator for baseball players, and the HR data are accumulated through a player's career, so it's not a good metric for players with different start time, so I choose avg as the metric.
+ I think the combination of height and weight namely size may influence the athletic ability of players, so I choose both weight and height at the same chart
+ Because I want to show how players wiht different avg distribute in these height and weight combinations, so I choose stacked bar.
+ visual encodings:
  1. encode the combinations of height and weight with X -addCategoryAxis
	2. encode counts of players in each combination with the length of bars
	3. encode counts of players with high,mid,low avg with their position in stacked bar
	4. encode players is avg with color hue



# Summary of findings:
+ most baseball players have weights between  160~200 pound and 70~75 inchs.
+ baseball players with high weight and high height tend to have bad avg.

# Feedbacks:
+ Person1 a Udacity class mate  :

		1. the icon it not clear , it is not easy to find out what is mid low high
		2. title should contain some important information about the plot's purpose
    3. x-axil label is not clear what it mean

+ Person2 李芬芬:

		1. the order of stacked bar should in order of low mid high or reverse
		2. the table below should be more easy to read , there should be more space between raws
		3. how can you say that 3H is the worst, you should sort data by high avg rate, otherwise we can not get that conclusion.

+ Person3 a friend:

    1. the table should be more readable


# Changes made based on feedbacks:
+ Change the title
+ delete the table
+ add x title to to make it clear what lebals mean
+ add a Vert 100% Grouped Bar to make it more clear pecentage of each group
+ addOrderRule


# Resources:
+ http://dimplejs.org/examples_viewer.html?id=bars_vertical_grouped_stacked: stacked bar
+ https://github.com/mbostock/d3/wiki: d3 documentation
+ https://github.com/PMSI-AlignAlytics/dimple/wiki : dimple API
+ http://chimera.labs.oreilly.com/books/1230000000345/index.html: d3 tutorial
+ http://stackoverflow.com/questions/23291200/dimple-js-how-can-i-change-the-labels-of-a-chart-axis-without-changing-the-data
+ http://stackoverflow.com/questions/492558/removing-multiple-files-from-a-git-repo-that-have-already-been-deleted-from-disk
+ http://stackoverflow.com/questions/18172851/deleting-dataframe-row-in-pandas-based-on-column-value
+ http://ghost-simondfletcherblog.azurewebsites.net/add-a-title-to-a-dimple-js-chart/
