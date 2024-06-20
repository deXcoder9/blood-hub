


# Blood Donation Management System
- This project implements a web application for managing blood donations. Here's a quick overview of the key functionalities:

## User Roles & Permissions:

- Admin: Full access to user management, donation requests, and content management.
- Donor: Register, view/manage donation requests, maintain profile (excluding email edit).
- Volunteer: Create/manage donation requests, update donation status, participate in content management (limited).


 **Authentication (Public):**
- User registration with basic information and blood group selection.
- Login functionality for registered users.


**Responsive Dashboard (Private):**
- All dashboards have a sidebar for navigation and are responsive across devices.


**Profile Management (Private):**
- Users can view and edit profile information (name, avatar, address, blood group).
- Email editing restricted for Donors.


**Donor Functionalities (Private):**
- Manage donation requests (create, edit, delete, view details).
- Track donation progress with status updates (pending, in-progress, done, canceled).
- Search for blood donation requests based on criteria.


**Admin Functionalities (Private):**
- Manage all users (view, block, unblock, change roles).
- Manage all blood donation requests (same as Donor functionalities).
- Content management system for blog creation and management (publish, unpublish, delete).


**Volunteer Functionalities (Private):**
- View and manage all blood donation requests (view, update status only).
- Participate in content management (excluding delete and publish functionalities).


**Public Features:**
- Search for blood donors based on blood group and location.
- View details of pending blood donation requests.
- Read published blog posts.