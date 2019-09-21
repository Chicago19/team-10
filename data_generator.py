#!/usr/bin/env python
# coding: utf-8

# In[27]:


from backend.backend_profile import backend_profile
from backend.backend_official import backend_official
from backend.backend_score import backend_score
from backend.config import config
from faker import Faker
import random


# In[30]:

# backend_official = backend_official(
#                 config['user'],
#                 config['pass'],
#                 config['host'],
#                 config['port'],
#                 config['db_name']
#         )
#
# backend_profile = backend_profile(
#                 config['user'],
#                 config['pass'],
#                 config['host'],
#                 config['port'],
#                 config['db_name']
#         )
#
# backend_score = backend_score(
#                 config['user'],
#                 config['pass'],
#                 config['host'],
#                 config['port'],
#                 config['db_name']
#         )


def generate_data(n):
    fake = Faker()
    bd = backend_profile('postgres','940728','localhost','5432','cfg_10')
    bo = backend_official('postgres','940728','localhost','5432','cfg_10')
    bs = backend_score('postgres','940728','localhost','5432','cfg_10')
    for i in range(n):
        profile = dict()
        profile['name'] = fake.name()
        profile['phone'] = fake.phone_number()[:12]
        profile['email'] = fake.ascii_email()
        profile['referral'] = fake.name()
        profile['age'] = random.randint(0,99)
        profile['password'] = fake.ean13()
        bd.insert_profile(profile)
        bo.update_written_exam(profile['email'],random.randint(0,40),'Intro In English')
        term = ['spring','summer','fall']
        bs.write_class_score(profile['email'],'Intro In English',random.randint(2000,2019),term[random.randint(0,2)],10)
        #print(profile)


if __name__ == "__main__":
    generate_data(100)


# In[ ]:
