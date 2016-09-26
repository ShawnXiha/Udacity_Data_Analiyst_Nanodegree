## 特征选择
- 选择最高分的K个特征
- 按百分率选择

SelectKBest removes all but the k highest scoring features

SelectPercentile removes all but a user-specified highest

+ For regression: f_regression
+ For classification: chi2 or f_classif

## feature scale

preprocessing.MinMaxScaler() 最小值为0，最大值为1

存在两个变量的交换如支持向量机，k近邻需要feature scale

否则不需要：如决定树，回归，逻辑回归

## PCA
参数 n_compent：
- 大于1的整数，选取n个成分
- （0，1] 选取能够解释这部分方差的成分

## 自定义scoring函数
```
def my_custom_loss_func(ground_truth, predictions):  
    diff = np.abs(ground_truth - predictions).max()
    return np.log(1 + diff)

score = make_scorer(my_custom_loss_func, greater_is_better=True)

```

然后score就可以放到
```
sklearn.grid_search.GridSearchCV(estimator, param_grid, scoring=None, fit_params=None, n_jobs=1, iid=True, refit=True, cv=None, verbose=0, pre_dispatch='2*n_jobs', error_score='raise'
```
当scoring参数来
