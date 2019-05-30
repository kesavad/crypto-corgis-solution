export class Corgi {
  owner: string;
  name: string;
  dna: string;
  color:string;
  level: i32;
  metadata: CorgiMetaData;
}
// ADDING THE TOKEN METADATA TO THE INDIVIDUAL CORGI ALLOWS INTEROP WITH OTHERS
export class CorgiMetaData {
  attributes: string[];
}

export class CorgiArray {
  corgis: Array<Corgi>;
}