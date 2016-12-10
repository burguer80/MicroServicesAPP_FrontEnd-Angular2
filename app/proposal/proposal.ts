export class Proposal {
  constructor(
    public id?: number,
    public customer?: string,
    public portfolio_url: string = "file_url.doc",
    public tools?: string,
    public estimated_hours?: number,
    public hourly_rate?: number,
    public weeks_to_complete?: number,
    public client_emaul?: string,
  ){}
}
