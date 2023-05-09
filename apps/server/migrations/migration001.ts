import { Activities } from "@prisma/client";
import { prisma } from "../src/db/prisma";

const userNames = ["Matt", "Karolina"];

const createUsers = async () => {
  console.log("creating users...");
  for (const name of userNames) {
    await prisma.user.upsert({
        where: {
            name
        },
        create: {
          name
        },
        update: {
          name
        }
    });
  }
};

const activities: Pick<Activities, "name" | "value">[] = [
    {
        name: "Bieganie",
        value: 1
    },
    {
        name: "Rower",
        value: 0.5
    }
]

const createActivities = async () => {
  console.log("creating activities...");
    for(const activity of activities){
      await prisma.activities.upsert({
        where: {
          name: activity.name
        },
        create: {
          ...activity
        },
        update: {
          ...activity
        }
      })
    }
};

async function main() {
  await createUsers();
  await createActivities();
}

(async () => await main())();
