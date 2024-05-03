## Leave Tracker App Using Laravel, Inertia.js, and React.js


## Requirements
- PHP Version  8.2
- Composer
- Node.js
- NPM
- MySQL
- Laravel 11
- Inertia.js
- React.js
- Tailwind CSS
- Laravel Breeze 
 

## Installation

-  Clone the repository `git clone https://github.com/Arup-paul/todo-laravel-inertia-react.git`

- cd into the project directory `cd  leave_tracker`
- Install the Composer dependencies `composer install`
- Set Up .env File `cp .env.example .env`
- Generate an application key: `php artisan key:generate`
- Clear All Cache `php artisan optimize:clear`
- Configure Database
- `DB_CONNECTION=your_driver
  DB_HOST=127.0.0.1
  DB_PORT=3306
  DB_DATABASE=your_database_name
  DB_USERNAME=your_database_username
  DB_PASSWORD=your_database_password`

- Configure Mail
  - `MAIL_MAILER=smtp
  MAIL_HOST=smtp.mailtrap.io
  MAIL_PORT=2525
  MAIL_USERNAME=username
  MAIL_PASSWORD=password
  MAIL_ENCRYPTION=tls
  MAIL_FROM_ADDRESS=email
  MAIL_FROM_NAME="${APP_NAME}"`
`

- NPM install `npm install`
- NPM run dev `npm run dev`


-   Run Migrations with seed `php artisan migrate --seed`
-   Start the Development Server `php artisan serve`

 





  


