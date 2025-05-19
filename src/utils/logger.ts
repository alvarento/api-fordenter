import chalk from 'chalk';

export const logServerStartSucess = (port: number) => {
  const time = new Date().toLocaleTimeString();
  console.log(
    chalk.gray(`${time}`),
    chalk.green('✅ [API iniciada com Sucesso!]'), '🔥🚀\n',
    chalk.green(' ➜  ') + chalk.whiteBright('Local: ') + chalk.blueBright.underline(`http://localhost:${port}/`),
    '\n' + chalk.gray('------------------------------------------')
  );
};


export const logServerStartError = (error: Error | undefined) => {
  const time = new Date().toLocaleTimeString();
  console.log(
    chalk.gray(`${time}`),
    chalk.red('❌ [Erro ao iniciar a API]'), '🧊👎\n',
    chalk.whiteBright(`⚠️  ErrorMessage: ${chalk.italic(error?.message)}`),
    '\n' + chalk.gray('------------------------------------------')
  );
};