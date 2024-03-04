CREATE TABLE entries (
  MelingoId INT PRIMARY KEY,
  Pos INT,
  Entry VARCHAR(512),
  TranslationFull VARCHAR(512),
  TranslationFlash VARCHAR(512),
  CorrectAns VARCHAR(512),
  CorrectAns2 VARCHAR(512),
  CorrectAns3 VARCHAR(512),
  Distractor1 VARCHAR(512),
  Distractor2 VARCHAR(512),
  Distractor3 VARCHAR(512),
  DistractorEN1 VARCHAR(512),
  DistractorEN2 VARCHAR(512),
  DistractorEN3 VARCHAR(512),
  UsageNote VARCHAR(512),
  Succeed VARCHAR(512),
  Failed VARCHAR(512),
  PronunciationFile VARCHAR(512),
  ImageFile VARCHAR(512),
  ManualEdit VARCHAR(512),
  LastUpadte VARCHAR(512),
  UsageNodeType VARCHAR(512),
  UnknownCol01 VARCHAR(512),
  UnknownCol02 VARCHAR(512),
  UnknownCol03 VARCHAR(512),
  UnknownCol04 VARCHAR(512),
  UnknownCol05 VARCHAR(512),
  UnknownCol06 VARCHAR(512),
  UnknownCol07 VARCHAR(512),
  UnknownCol08 VARCHAR(512),
  UnknownCol09 VARCHAR(512),
  UnknownCol10 VARCHAR(512),
  UnknownCol11 VARCHAR(512),
  UnknownCol12 VARCHAR(512)
);

COPY entries
FROM '/docker-entrypoint-initdb.d/Entriesnodu.csv'
DELIMITER ','
CSV HEADER;

CREATE TABLE examples (
  ID INT PRIMARY KEY,
  MelingoID INT,
  Text TEXT,
  ForDictionary TEXT,
  ForFlashCards TEXT,
  Source TEXT,
  Comments TEXT,
  Ord TEXT,
  UnknownCol01 VARCHAR(512),
  UnknownCol02 VARCHAR(512),
  UnknownCol03 VARCHAR(512),
  UnknownCol04 VARCHAR(512),
  UnknownCol05 VARCHAR(512),
  UnknownCol06 VARCHAR(512)
  -- CONSTRAINT FK_MelingoID FOREIGN KEY(MelingoID) REFERENCES entries(MelingoId)
);

COPY examples
FROM '/docker-entrypoint-initdb.d/Examples.csv'
DELIMITER ','
CSV HEADER;
