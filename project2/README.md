# 项目名称在泰坦尼克上存活的关键

发现 age ,Cabin，Embarked 这三项资料缺失较多

## 通过箱图柱状图发现，从存活率来看
1. Pclass (1>2>3);
2. Sex(female> male );
3. Embarked(C>Q>S)；

## 通过 Chi-Squared Test发现

Pclass,Sex and Embarked 三个因素均对生还率有限制影响

## 问了通过项目学习的知识

1. pandas
2. numpy
3. 统计假设检验
4. 使用scipy.stats计算统计量
5. 使用matplotlib作图
