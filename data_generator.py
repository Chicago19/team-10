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


def generate_data(n):

    b_official = backend_official(
                    config['user'],
                    config['pass'],
                    config['host'],
                    config['port'],
                    config['db_name']
    )

    b_profile = backend_profile(
                    config['user'],
                    config['pass'],
                    config['host'],
                    config['port'],
                    config['db_name']
    )

    b_score = backend_score(
                    config['user'],
                    config['pass'],
                    config['host'],
                    config['port'],
                    config['db_name']
    )
    fake = Faker()
    for i in range(n):
        profile = dict()
        profile['name'] = fake.name()
        profile['phone'] = fake.phone_number()[:12]
        profile['email'] = fake.ascii_email()
        profile['referral'] = fake.name()
        profile['age'] = random.randint(0,99)
        profile['password'] = fake.ean13()
        b_profile.insert_profile(profile)
        b_official.update_written_exam(profile['email'],random.randint(0,40),'Intro In English')
        term = ['spring', 'summer', 'fall']
        b_score.write_class_score(profile['email'],'Intro In English', random.randint(2000,2019),term[random.randint(0,2)],10)
        # print(profile)


if __name__ == "__main__":
    generate_data(100)


# In[ ]:
