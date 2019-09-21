#!/usr/bin/env python
# coding: utf-8

# In[6]:


import psycopg2


# In[7]:


class backend_score():
    def __init__(self,user,password,host,port,database):
    #self.connection = None
    #self.cursor = None
        self.user = user
        self.password = password
        self.host = host
        self.port = port
        self.database = database
    
    def connect_to_database(self):
        try:
            connection = psycopg2.connect(user=self.user,
                                         password=self.password,
                                         host=self.host,
                                         port=self.port,
                                         database=self.database)
            cursor = connection.cursor()
            #print(connection.get_dsn_parameters(),"\n")

            cursor.execute("SELECT version();")
            record = cursor.fetchone()
            #print("You are connected to -",record,"\n")
            return connection
        except (Exception,psycopg2.Error) as error:
            print("Error while connecting to PostgreSQL", error)
    def write_class_score(self,email,class_name,score):
        connection = self.connect_to_database()
        cursor = connection.cursor()
        try:
            cursor.execute("INSERT INTO class(email,class_name,score) VALUES(%s,%s,%s)",(email,class_name,score))
            connection.commit()
            return True
        except (Exception,psycopg2.Error) as error:
            print(error)
            return False
        finally:
            self.close_connection(connection,cursor)
    def view_class_score(self,email,class_name):
        connection = self.connect_to_database()
        cursor = connection.cursor()
        try:
            cursor.execute("SELECT score from class where email=%s AND class_name=%s",(email,class_name))
            record = cursor.fetchone()
            if len(record) > 0:
                return record[0]
            return 0
        except (Exception,psycopg2.Error) as error:
            print(error)
            return -1
        finally:
            self.close_connection(connection,cursor)
            
    def close_connection(self,connection,cursor):
        if (connection):
            cursor.close()
            connection.close()


# In[8]:


#bd = backend_score('postgres','940728','localhost','5432','cfg_10')


# In[9]:


#bd.write_class_score('1234@illinois.edu','Intro In English',100)


# In[10]:


#bd.view_class_score('1234@illinois.edu','Intro In English')


# In[ ]:




