from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_cors import CORS
from flask_migrate import Migrate

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:kean0529@localhost/job-tracker"
db = SQLAlchemy(app)
app.app_context().push()
migrate = Migrate(app, db)
CORS(app)

class Jobs(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    company = db.Column(db.String(100))
    job_position = db.Column(db.String(100))
    salary_experience = db.Column(db.String(100))
    location = db.Column(db.String(100))
    date_added = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    progress = db.Column(db.String(100))
    progress_style = db.Column(db.String(100))
    
    def __repr__(self):
        return f"Company: {self.company} Job: {self.job_position}"
    
    def __init__(self, company, job_position, salary_experience, location, progress):
        self.company = company
        self.job_position = job_position
        self.salary_experience = salary_experience
        self.location = location
        self.progress = progress
        
    def update_style(self):
        if "Rejected" == self.progress:
            self.progress_style = "text-red-800 bg-red-300"
        elif "Interview" == self.progress:
            self.progress_style = "text-green-800 bg-green-300"
        else:
            self.progress_style = "text-yellow-800 bg-yellow-300"
        
        
    def format_job(self):
        return {
            "id": self.id,
            "company": self.company,
            "job_position": self.job_position,
            "salary_experience": self.salary_experience,
            "location": self.location,
            "date_added": self.date_added,
            "progress": self.progress,
            "progress_style": self.progress_style
        }

@app.route('/')
def hello():
    return 'Hey!'

# Create a new job application
@app.route('/jobs', methods = ['POST'])
def create_job():
    company = request.json['company']
    job_position = request.json['job_position']
    salary_experience = request.json['salary_experience']
    location = request.json['location']
    progress = request.json['progress']
    new_job = Jobs(company, job_position, salary_experience, location, progress)
    
    db.session.add(new_job)
    db.session.commit()
    return new_job.format_job()

# Get all job applications
@app.route('/jobs', methods = ['GET'])
def get_all_jobs():
    jobs = Jobs.query.order_by(Jobs.id.asc()).all()
    job_list = [x.format_job() for x in jobs]
    return {'jobs': job_list}

# Get single application
@app.route('/jobs/<id>', methods = ['GET'])
def get_job(id):
    job = Jobs.query.filter_by(id=id).one()
    return {'job': job.format_job()}

# Delete single application
@app.route('/jobs/<id>', methods = ['DELETE'])
def delete_job(id):
    job = Jobs.query.filter_by(id=id).one()
    db.session.delete(job)
    db.session.commit()
    
    return f'Job (id: {id}) deleted'

# Update an application
@app.route('/jobs/<id>', methods = ['PUT'])
def update_job_progress(id):
    job = Jobs.query.filter_by(id=id)
    progress = request.json['progress']
    job.update(dict(progress = progress))
    job.one().update_style()
    db.session.commit()
    
    return {'job': job.one().format_job()}
    

if __name__ == '__main__':
    app.run()
    
    
