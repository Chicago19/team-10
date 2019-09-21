#!/usr/bin/env python
# coding: utf-8

# In[6]:


import psycopg2
import datetime


# In[25]:


class backend_official():
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

    def update_written_exam(self,email,written_score,level):

        connection = self.connect_to_database()
        cursor = connection.cursor()
        try:
            #cursor.execute("SELECT best_exam from official where email=%s",(email,))
            dt = datetime.datetime.now()
            cursor.execute("SELECT best_exam FROM official WHERE email=%s;",(email,))
            record = cursor.fetchone()
            best_score = int(record[0]) if record[0] is not None else 0
            if written_score > best_score:
                best_score = written_score
            cursor.execute("UPDATE official SET written_score=%s,level=%s,test_date=%s,best_exam=%s WHERE email=%s",(written_score,level,dt.strftime("%Y-%m-%d %H:%M"),str(best_score),email))
            connection.commit()
            return True
        except (Exception,psycopg2.Error) as error:
            print(error)
            return False
        finally:
            self.close_connection(connection,cursor)

    def get_cur_user_classes(self, email):
        try:
            connection = psycopg2.connect(user=self.user,
                                         password=self.password,
                                         host=self.host,
                                         port=self.port,
                                         database=self.database)
            cursor = connection.cursor()

            now = datetime.datetime.now()

            if datetime.month > 8:
                semester = "summer"
            elif datetime.month > 4:
                semester = "spring"
            else:
                semester = "fall"

            vals = cursor.execute("SELECT class_name FROM class WHERE email = %s AND class_year = %s AND class_semester = %s", (email, now.year, semester))
            return vals

        except Exception:
            return False

        def get_all_user_classes(self, email):
            try:
                connection = psycopg2.connect(user=self.user,
                                             password=self.password,
                                             host=self.host,
                                             port=self.port,
                                             database=self.database)
                cursor = connection.cursor()


                vals = cursor.execute("SELECT class_name FROM class WHERE email = %s", (email, now.year, semester))
                return vals

            except Exception:
                return False



    def close_connection(self,connection,cursor):
        if (connection):
            cursor.close()
            connection.close()


# In[26]:


#bd = backend_official('postgres','940728','localhost','5432','cfg_10')


# In[27]:


#bd.update_written_exam('1234@illinois.edu',28,'Intro In English')


# In[ ]:





# In[ ]:
