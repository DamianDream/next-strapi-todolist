# Project name "N.S.T."
Next.js, Strapai(CMS), Tailwind
--
Note: This project was started with passion to code. I was new to Next 13, Tailwind and Strapi(CMS). 
If you find any bugs or improvements feel free to create an issue.

![demo_screenshot.jpg](frontend%2Fpublic%2Fassets%2Fdemo_screenshot.jpg)
Created by Batalshikov Dima via exchange coffee to code

## Getting Started

1. Get the repository :

```bash
  git clone https://github.com/DamianDream/next-strapi-todolist.git
```

2. In the IDE or terminal check is you located in project root folder and then run `setup`:
   Script will run installation "yarn" & all required dependencies:
```bash
  yarn setup
```

3. Next important, you should create `.env` file in the Backend root folder, and add data that I provide you below.
```dotenv
HOST=0.0.0.0
PORT=1337
APP_KEYS=L8f4OVlKNoUwzRnGePNkaw==,xbkGOba+RePVnbX0Qw60Jw==,lTY0retbtyq5VSnJBpBtwg==,N8OwBn80m6IjwiHz7BdFUA==
API_TOKEN_SALT=THRpMYWIM3GwbJVdFLohfg==
ADMIN_JWT_SECRET=T7cuTedrDqiYmJylzlsv6A==
TRANSFER_TOKEN_SALT=Sal8Wrog5O49EdI+Htekow==
# Database
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=SXg6himY0jC/4nMNfG1JJg==
```

File location you can find on screenshot below.
![demo_screenshot_env.jpg](frontend%2Fpublic%2Fassets%2Fdemo_screenshot_env.jpg)


4. In the project root folder you can ask Yarn run `dev` command to start frontend and backend: <br>
`"dev": "yarn clear && concurrently \"cd frontend && yarn dev:turbo\" \"cd backend && yarn develop\""`
```bash
  yarn dev  
```

4. For start using Strapi you should create admin profile<br>
    Fill free to use random credentials:<br>
   - #### login: mail@gmail.com<br>
   - #### password: Password1<br>
```bash
  http://localhost:1337/admin/
```
4.1 create profile
![strapi_step_1.jpg](frontend%2Fpublic%2Fassets%2Fstrapi_step_1.jpg)
<br>
<br>
- 4.2 Follow the green arrow and do next: <br>
    - open `Settings` <br>
    - open `Roles` for users and choose `Public` <br>
    - find our demo database (collection) `Strapitodo` and mask all `Select all` <br>
    - Save <br><br>
![strapi_step_2jpg.jpg](frontend%2Fpublic%2Fassets%2Fstrapi_step_2jpg.jpg)
<br>
<br>
- 4.3
Check the existing predefined collection `strapitodo`
You can find more info and documentation about this wonderful CMS via link https://docs.strapi.io/dev-docs/quick-start
<br>
<br>
![demo_screenshot_content.jpg](frontend%2Fpublic%2Fassets%2Fdemo_screenshot_content.jpg)
<br>
<br>
5. After Yarn finish installation we can manage to set up admin profile you ready to go! <br>
   http://localhost:3000/
![demo_screenshot_app.jpg](frontend%2Fpublic%2Fassets%2Fdemo_screenshot_app.jpg)
! Please note: app build with "Turbopack" instead "Webpack"
Personally I find it very fast. Yoy can change it in the package.json (frontend), just remove `--turbo` inline `dev` script <br>
![demo_screenshot_script.jpg](frontend%2Fpublic%2Fassets%2Fdemo_screenshot_script.jpg) <br>
---
link on Turbopack: 
https://nextjs.org/docs/architecture/turbopack

If you have any question please feel free to ask or create issue in GitHub repo 😎
