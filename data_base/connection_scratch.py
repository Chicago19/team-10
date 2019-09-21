#!/usr/bin/env python
# coding: utf-8

# In[1]:


import psycopg2


# In[17]:


class backend():
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
            
    def insert_profile(self,profile):

        connection = self.connect_to_database()
        cursor = connection.cursor()
        try:
            cursor.execute("INSERT INTO profile(name,email,referral,phone,password,age) VALUES(%s,%s,%s,%s,%s,%s)",(profile["name"],profile["email"],profile["referral"],profile["phone"],profile["password"],profile["age"]))
            connection.commit()
            return True
        except (Exception,psycopg2.Error) as error:
            return False
        finally:
            self.close_connection(connection,cursor)
            
    def __check_login_password(self,email,password):
        try:
            connection = self.connect_to_database()
            cursor = connection.cursor()
            command = "SELECT password FROM profile WHERE email = %s;"
            cursor.execute(command, (email,))
            db_pass = cursor.fetchone()
            #print('herere')
            print(db_pass)
            if db_pass[0] == password:
                return True
            return False
        except (Exception,psycopg2.Error) as error:
            print("Error while checking login password", error)
            return False
        finally:
            self.close_connection(connection,cursor)
            
    def check_login_credential(self,email,password):
        try:
            connection = self.connect_to_database()
            cursor = connection.cursor()
            command = "SELECT * FROM profile WHERE email = %s;"
            cursor.execute(command, (email,))
                #mobile_records = 
            data = cursor.fetchall()
            print(len(data))
            if len(data) > 0:
                return self.__check_login_password(email,password)
        except (Exception,psycopg2.Error) as error:
            print("Error while checking login email", error)
            return False
        finally:
            self.close_connection(connection,cursor)
            
    def check_email(self,email):
        try:
            connection = self.connect_to_database()
            cursor = connection.cursor()
            command = "SELECT * FROM profile WHERE email = %s;"
            cursor.execute(command, (email,))
            #mobile_records = 
            if len(cursor.fetchall()) > 0:
                return True
            return False
        except (Exception,psycopg2.Error) as error:
            print("Error while checking email", error)
            return True
        finally:
            self.close_connection(connection,cursor)
    def close_connection(self,connection,cursor):
        if (connection):
            cursor.close()
            connection.close()
            #print("PostgreSQL connection is closed!")
            


# ## Main

# In[18]:


# bd = backend('postgres','940728','localhost','5432','cfg_10')


# In[ ]:





# In[19]:


# profile = {'name':'Stanley Yang',
#           'email':'12@illinois.edu',
#           'referral':'Jimmy',
#           'phone':'2245672231',
#           'password':'123456',
#           'age':'42'}
#print(bd.insert_profile(profile))


# In[20]:



#bd.check_email('1234@illinois.edu')


# In[21]:



#bd.check_email('12@illinois.edu')


# In[22]:


#bd.check_login_credential('12@illinois.edu','123456')


# In[ ]:




