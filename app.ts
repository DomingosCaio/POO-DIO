import { PeopleAccount } from "./class/peopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(
  2445001,
  "Caio Domingos",
  20
);

peopleAccount.deposit(5000);
peopleAccount.withdraw(5005);
