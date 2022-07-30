from operator import ge
from strawberry.extensions import Extension
from dictionary.db import get_session

class SessionExtension(Extension):
  def on_request_start(self):
    self.execution_context.context["db_session"] = get_session()
  
  def on_request_end(self):
    self.execution_context.context["db_session"].close()