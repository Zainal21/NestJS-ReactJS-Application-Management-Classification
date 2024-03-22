import { Users } from 'src/auth/entities/users.entity';
import { Problems } from 'src/problems/problems.entity';
import { DataSource, In } from 'typeorm';
import * as bcrypt from 'bcrypt';

export async function seedData(dataSource: DataSource): Promise<void> {
  const userRepo = dataSource.getRepository(Users);
  const problemRepo = dataSource.getRepository(Problems);

  let problemsData = [
    {
      problemName: 'Education',
    },
    {
      problemName: 'Food',
    },
    {
      problemName: 'Residence',
    },
    {
      problemName: 'Wedding',
    },
    {
      problemName: 'Retirement',
    },
  ];

  for (let index = 0; index < problemsData.length; index++) {
    const problem = problemsData[index];
    await problemRepo.save(problem);
  }

  let usersData = [
    {
      fullname: 'Muhamad Zainal Arifin',
      email: 'user@user.com',
      password: await bcrypt.hash('password', 10),
    },
  ];
  for (let index = 0; index < usersData.length; index++) {
    const user = usersData[index];
    await userRepo.save(user);
  }
}
