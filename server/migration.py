from app import db, Jobs
# from your_flask_app.models import Jobs

def update_progress_style():
    # Fetch all records with null progress_style
    records_to_update = Jobs.query.filter_by(progress_style=None).all()

    for record in records_to_update:
        # Apply the new rule
        if record.progress == "Rejected":
            record.progress_style = "text-red-800 bg-red-300"
        elif record.progress == "Interview":
            record.progress_style = "text-green-800 bg-green-300"
        else:
            record.progress_style = "text-yellow-800 bg-yellow-300"

    # Commit the changes to the database
    db.session.commit()

if __name__ == "__main__":
    update_progress_style()
