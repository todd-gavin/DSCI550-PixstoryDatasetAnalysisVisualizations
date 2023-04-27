# DSCI550_PixstoryDatasetAnalysisVisualizations
Collaborators: Daniil Abruzzese, Todd Gavin, Tania Dawood, Jai Agrawal

Link to Site Visualizations: https://todd-gavin.github.io/DSCI550-PixstoryDatasetAnalysisVisualizations/ 

## Visualization #1: U.S. State Choropleth Chart to represent average toxicity across states

Description: We chose the visualization because we were curious to find out if the toxicity of posts varied accross different US states. This allowed us to make use of our toxicity features that we generated previously, and begin to answer questions around if Pixstory is accomplishing its goal as trying to be a clean social media. We found that the most toxic states are New Hampshire, Massachusetts, Ohio, and Kansas, and the least toxic states are Oregon, Nevada, and Wyoming. 

Summary of datset preparation:
1. Created df that filters for just the Date, Geotopic name, and Toxicity columns. 
2. Created a list of all 50 states, then created a new df that only includes Geotopic names that match one of the 50 states. This creates a df that filters out all locations other than one of the 50 states.
3. Created a new df that groups by state and takes the mean of the toxicity such that each row is a unique state and its respective average toxicity
4. Added a column to rank states in terms of toxicity
5. Finally, renamed columns to match observable template: "avg_toxicity" became "rate", "toxicity_rank" became "rank", "state" became "name"})



## Visualization #2: 


## Visualization #3: 


## Visualization #4: 


## Visualization #5: Bar Chart Race to represent Pixstory interest engagement over time and COVID cases (divided by 10,000) over time

Description: We were curious to find out how Pixstory posts varied over time in terms of their related interests. We also wanted to see how COVID cases were developing along side this. The COVID data represents COVID cases in India, which we are using as an indicator for the total COVID cases in the world. **Note: COVID cases were divided by 10,000 in order to normalize the data to be comparable with the interest variables. This all racing bars on the bar chart to be relatively similar in size**

Some interesting findings: 
- During 2020, health was the most discussed interest by a long shot. This is likely due to the fact that the COVID pandemic was raging during this time.
- In January 2021 there was a large spike in posts from the “politics” interest, so much so that it overtook health and was the most popular interest on Pixstory at the time. We hypothesize that one contributing factor to this was the US capitol raid that occured on January 6, 2021. 
-  The Health topic spiked at the end of September 2021. This could be partially due to the abortion ban in Texas that was making news headlines during the time
- In 2022 sports spikes and takes lead in terms of most engaged with interest; health is no longer the favorite interest as COVID cases have vastly slowed down.


Summary of dataset preparation:
1. Imported master dataset and dropped all columns except Interest and Date
2. Created a bar graph that shows the most frequent interests appearing in posts. Decided to focus on top 6 interests: sports, health, entertainment, food, politics, and education
3. Used lambda function that converted the interest column into a list of strings and made all words lowercase to make the data easy to process
4. Created a function tally_interests that counted the total number of times each of the 6 top interests appeared for a given date
5. Created a new data frame where each column represents the number of times a given interest appeared in a post
6. Added new columns to the df that takes the cumulative value of tally_interest such that each row is the sum of the number of posts containing the given interest up until that date 
7. Created a COVID case df that found the cumulative number of COVID cases in India. 
  - Divided COVID cases by 10,000 in order to normalize the numbers to be comporable to Pixstory interest cumulative counts
9. Created a new df called df_observable to match the Observable template and sample data to allow for seamless import process
  - Renamed the columns to 'date', 'name', 'category', 'value' 
  - Reformatted the dataframe: for every day, each variable in the bar chart race now represents one row rather than being in a separate column. Thus, the same date will appear six times to represent each of the six interests. 
  - The category variable is going to be listed as 'Interest' for every row (it's only there as a placeholde to match the template, we are not interested in using different categories for this visualization)
  - Saving the dataframe as a CSV and JSON file


## Apache Solr/Elastic Search


## ImageSpace


## MEMEX GeoParser Application


## Report Questions
1. Why did you select your 5 D3 visualizations?
2. How are they answering and showing off your features from assignments 1 and 2 and the work you did?
3. Did Image Space allow you to find any similarity between the Pixstory story images that previously was not easily discernible?
4. What type of location data showed up in your data? Any correlations not previously seen, e.g., from assignment 1?
5. Also include your thoughts about Image Space and ImageCat – what was easy about using them? What wasn’t?
