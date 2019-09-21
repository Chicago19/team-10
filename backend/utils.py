import backend_official

class utils():
	def __init__(self,user,password,host,port,database):
		self.bd = backend_official(user,password,host,port,database)
	def grade_exam(self,mc):
		##mc is a list
		pass
