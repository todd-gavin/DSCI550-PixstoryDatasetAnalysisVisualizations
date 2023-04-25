# Instalation and Setup Instructions

## Covid19 Example 
1. Clone NasaJPL MEMEX GeoParser Repo: `git clone https://github.com/nasa-jpl-memex/GeoParser`
2. Install Prerequisites: (Note: Maye need to add these pip installs directly into `Ingest COVID data.ipynb` notebook.)
    - `pip install jupyterlab && pip install notebook`
    - `pip install pandas pysolr requests tqdm`
3. Create GeoParser docker: `docker pull nasajplmemex/geo-parser`
4. Build docker containers inside dir /Docker: `docker-compose up -d` (Make sure docker desktop is open before running)
4. Run command to establish `$GEOPARSER_HOME` pwd: `export GEOPARSER_HOME=/Users/toddgavin/Desktop/USC_Classes/DSCI550-Data_Science_at_Scale/Assignment_3/GitHub/DSCI550_PixstoryDatasetAnalysisVisualizations/9_MEMEXGeoParser/GeoParser`
    - Can use this coomand to verify pwd is working correctly: `echo $GEOPARSER_HOME`
5. Run these command to get data:
    1. `cd $GEOPARSER_HOME/examples/covid19`
    2. `./download-metadata.sh`
    3. `./create-core.sh` (make sure that you can see http://localhost:8983/solr/ if not wait a few seconds for Solr to start up.)
    4. `./add-fields.sh`
6. Open up Jupyter Notebook
    1. `cd $GEOPARSER_HOME/examples/covid19 && jupyter notebook`
    2. Run `Ingest COVID data.ipynb` (will take ~30-40 minutes)

