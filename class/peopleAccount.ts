import { DioBank } from "./DioBank";

export class PeopleAccount extends DioBank {
  private document_id: number;

  constructor(document_id: number, name: string, accountBank: number) {
    super(name, accountBank);
    this.document_id = document_id;
  }

  getDocumentId = (document_id: number) => {
    this.document_id = document_id;
  };
}
