
const employees = [
  {
    "id": 1,
    "first_name": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "task_title": "Complete Project Report",
        "task_description": "Prepare and submit the final project report.",
        "task_date": "2024-10-20",
        "category": "Work",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Team Meeting",
        "task_description": "Attend the weekly team meeting.",
        "task_date": "2024-10-21",
        "category": "Meetings",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Review Code",
        "task_description": "Review the code for the new feature implementation.",
        "task_date": "2024-10-22",
        "category": "Development",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      }
    ],
    "task_counts": {
      "active": 2,
      "new_task": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "first_name": "Anaya",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "task_title": "Client Presentation",
        "task_description": "Prepare slides and present to the client.",
        "task_date": "2024-10-19",
        "category": "Client Work",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "task_title": "Submit Timesheet",
        "task_description": "Fill out and submit the timesheet for the week.",
        "task_date": "2024-10-18",
        "category": "Admin",
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true
      }
    ],
    "task_counts": {
      "active": 0,
      "new_task": 0,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 3,
    "first_name": "Rohan",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "task_title": "Code Refactoring",
        "task_description": "Refactor the legacy codebase to improve performance.",
        "task_date": "2024-10-20",
        "category": "Development",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Write Unit Tests",
        "task_description": "Add unit tests for the new API endpoints.",
        "task_date": "2024-10-22",
        "category": "Testing",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Fix Bugs",
        "task_description": "Fix critical bugs in the production environment.",
        "task_date": "2024-10-23",
        "category": "Debugging",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Team Lunch",
        "task_description": "Attend the team lunch outing.",
        "task_date": "2024-10-24",
        "category": "Social",
        "active": false,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ],
    "task_counts": {
      "active": 3,
      "new_task": 2,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 4,
    "first_name": "Isha",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "task_title": "Database Backup",
        "task_description": "Perform a backup of the production database.",
        "task_date": "2024-10-21",
        "category": "IT",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "task_title": "Security Audit",
        "task_description": "Run a security audit on the new application.",
        "task_date": "2024-10-23",
        "category": "Security",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Organize Files",
        "task_description": "Organize project files for easy access.",
        "task_date": "2024-10-24",
        "category": "Admin",
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true
      }
    ],
    "task_counts": {
      "active": 1,
      "new_task": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 5,
    "first_name": "Kabir",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "task_title": "Research New Technology",
        "task_description": "Research potential technologies for future projects.",
        "task_date": "2024-10-20",
        "category": "R&D",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Project Planning",
        "task_description": "Plan the next steps for the upcoming project.",
        "task_date": "2024-10-22",
        "category": "Planning",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      }
    ],
    "task_counts": {
      "active": 2,
      "new_task": 1,
      "completed": 0,
      "failed": 0
    }
  }
];


    
    const admin= [{
          "id": 1,
          "email": "admin@example.com",
          "password": "123"
        }
    ]  
      
export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
    
}

export const getLocalStorage=()=>{
   const employees = JSON.parse(localStorage.getItem('employees'))
   const admin =JSON.parse(localStorage.getItem('admin'))
   return{employees,admin}
}