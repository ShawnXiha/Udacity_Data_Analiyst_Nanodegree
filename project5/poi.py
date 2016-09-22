#!/usr/bin/python
from feature_format import featureFormat,targetFeatureSplit
from sklearn.pipeline import Pipeline, FeatureUnion
from sklearn.decomposition import PCA
from sklearn.feature_selection import SelectKBest
from sklearn.preprocessing import MinMaxScaler
from sklearn.linear_model import LogisticRegression
from tester import *

### Task 1: Select what features you'll use.
### features_list is a list of strings, each of which is a feature name.
### The first feature must be "poi".
features_list = ['poi']  # You will need to use more features

features_list += ['bonus', 'exercised_stock_options', 'total_stock_value']
features_list += ['salary', 'deferral_payments', 'total_payments',
                  'loan_advances', 'restricted_stock_deferred',
                  'deferred_income', 'expenses', 'other', 'long_term_incentive',
                  'restricted_stock', 'director_fees']
features_list += ['to_messages', 'from_poi_to_this_person', 'from_messages',
                  'from_this_person_to_poi', 'shared_receipt_with_poi']


### Load the dictionary containing the dataset
data_dict = pickle.load(open("final_project_dataset.pkl", "r"))

### Task 2: Remove outliers
del data_dict['TOTAL']

### Task 3: Create new feature(s)
for name in data_dict:

    try:
        data_dict[name]['from_poi_ratio'] = data_dict[name][
            'from_poi_to_this_person'
        ] / data_dict[name]['to_messages']
    except:
        data_dict[name]['from_poi_ratio'] = 'NaN'
    try:
        data_dict[name]['to_poi_ratio'] = data_dict[name][
            'from_this_person_to_poi'
        ] / data_dict[name]['from_messages']
    except:
        data_dict[name]['to_poi_ratio'] = 'NaN'

features_list += ['from_poi_ratio', 'to_poi_ratio']

### Store to my_dataset for easy export below.
my_dataset = data_dict


### Extract features and labels from dataset for local testing
data = featureFormat(my_dataset, features_list, sort_keys=True)
labels, features = targetFeatureSplit(data)
my_dataset = data_dict
minmax = MinMaxScaler()
combined_features = FeatureUnion([("pca", PCA(n_components=18)), ("univ_select", SelectKBest(k=3))])
lg = LogisticRegression(C=100000000000000000000,
                        tol=1e-10,
                        class_weight='balanced',
                        )
clf = Pipeline(steps = [("minmax", minmax),
                 ("features", combined_features),
                 ("lg",lg)])
test_classifier(clf, my_dataset, features_list ,folds = 1000)
dump_classifier_and_data(clf, my_dataset, features_list)