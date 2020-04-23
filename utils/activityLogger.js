const { UserActivityModel } = require('../modules/models');

global.addUserActivity = function mClient(userId, codeModule, actyData) {
  console.log(`logging activity for : ${codeModule}`);
  try {
        try {
            const userActivity = new UserActivityModel({
              userId,
              module: codeModule,
              data: actyData,
              date: new Date(),
            });
            userActivity.save((error) => {
              if (error) {
                console.log(`userId: ${userId};activity logging failed for ${codeModule} Error: ${error}`);
              }
            });
        } catch (error) {
          console.log(error);
        }
  } catch (err) {
    console.log(err);
  }
};
