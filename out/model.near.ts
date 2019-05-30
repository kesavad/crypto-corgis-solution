
      import { storage, near, base64 } from "./near";
      import { JSONEncoder } from "./json/encoder";
      import { JSONDecoder, ThrowingJSONHandler, DecoderState } from "./json/decoder";
      import {Corgi as wrapped_Corgi, CorgiMetaData as wrapped_CorgiMetaData, CorgiArray as wrapped_CorgiArray} from "./model";

      // Runtime functions
      @external("env", "return_value")
      declare function return_value(value_len: usize, value_ptr: usize): void;
    
export function __near_encode_Array_String(
          value: Array<String>,
          encoder: JSONEncoder): void {
for (let i = 0; i < value.length; i++) {
if (value[i] != null) {
            encoder.setString(null, value[i]);
          } else {
            encoder.setNull(null);
          }
}
}
export function __near_encode_CorgiMetaData(
          value: wrapped_CorgiMetaData,
          encoder: JSONEncoder): void {
if (value.attributes != null) {
          encoder.pushArray("attributes");
          __near_encode_Array_String(<Array<String>>value.attributes, encoder);
          encoder.popArray();
        } else {
          encoder.setNull("attributes");
        }
}
export function __near_encode_Corgi(
          value: wrapped_Corgi,
          encoder: JSONEncoder): void {
if (value.owner != null) {
            encoder.setString("owner", value.owner);
          } else {
            encoder.setNull("owner");
          }
if (value.name != null) {
            encoder.setString("name", value.name);
          } else {
            encoder.setNull("name");
          }
if (value.dna != null) {
            encoder.setString("dna", value.dna);
          } else {
            encoder.setNull("dna");
          }
if (value.color != null) {
            encoder.setString("color", value.color);
          } else {
            encoder.setNull("color");
          }
encoder.setInteger("level", value.level);
if (value.metadata != null) {
          encoder.pushObject("metadata");
          __near_encode_CorgiMetaData(<CorgiMetaData>value.metadata, encoder);
          encoder.popObject();
        } else {
          encoder.setNull("metadata");
        }
}
export class __near_JSONHandler_Corgi extends ThrowingJSONHandler {
      buffer: Uint8Array;
      decoder: JSONDecoder<__near_JSONHandler_Corgi>;
      handledRoot: boolean = false;
      value: wrapped_Corgi;

      constructor(value_: wrapped_Corgi) {
        super();
        this.value = value_;
      }
      
setInteger(name: string, value: i64): void {
if (name == "level") {
            this.value.level = <i32>value;
            return;
          }

        super.setInteger(name, value);
      }
setString(name: string, value: String): void {
if (name == "owner") {
            this.value.owner = <String>value;
            return;
          }
if (name == "name") {
            this.value.name = <String>value;
            return;
          }
if (name == "dna") {
            this.value.dna = <String>value;
            return;
          }
if (name == "color") {
            this.value.color = <String>value;
            return;
          }

        super.setString(name, value);
      }
setNull(name: string): void {
if (name == "owner") {
        this.value.owner = <String>null;
        return;
      }
if (name == "name") {
        this.value.name = <String>null;
        return;
      }
if (name == "dna") {
        this.value.dna = <String>null;
        return;
      }
if (name == "color") {
        this.value.color = <String>null;
        return;
      }
if (name == "level") {
        this.value.level = <i32>null;
        return;
      }
if (name == "metadata") {
        this.value.metadata = <wrapped_CorgiMetaData>null;
        return;
      }

      super.setNull(name);
    }

      pushObject(name: string): bool {
if (!this.handledRoot) {
      assert(name == null);
      this.handledRoot = true;
      return true;
    } else {
      assert(name != null);
    }
if (name == "metadata") {
          this.value.metadata = <CorgiMetaData>__near_decode_CorgiMetaData(this.buffer, this.decoder.state);
          return false;
        }

        return super.pushObject(name);
      }

      pushArray(name: string): bool {

        return super.pushArray(name);
      }
}

export class __near_JSONHandler_CorgiMetaData extends ThrowingJSONHandler {
      buffer: Uint8Array;
      decoder: JSONDecoder<__near_JSONHandler_CorgiMetaData>;
      handledRoot: boolean = false;
      value: wrapped_CorgiMetaData;

      constructor(value_: wrapped_CorgiMetaData) {
        super();
        this.value = value_;
      }
      
setNull(name: string): void {
if (name == "attributes") {
        this.value.attributes = <Array<String>>null;
        return;
      }

      super.setNull(name);
    }

      pushObject(name: string): bool {
if (!this.handledRoot) {
      assert(name == null);
      this.handledRoot = true;
      return true;
    } else {
      assert(name != null);
    }

        return super.pushObject(name);
      }

      pushArray(name: string): bool {
if (name == "attributes") {
          this.value.attributes = <Array<String>>__near_decode_Array_String(this.buffer, this.decoder.state);
          return false;
        }

        return super.pushArray(name);
      }
}

export class __near_JSONHandler_Array_String extends ThrowingJSONHandler {
      buffer: Uint8Array;
      decoder: JSONDecoder<__near_JSONHandler_Array_String>;
      handledRoot: boolean = false;
      value: Array<String>;

      constructor(value_: Array<String>) {
        super();
        this.value = value_;
      }
      
setString(name: string, value: String): void {
          this.value.push(<String>value);
        }
setNull(name: string): void {
        this.value.push(<String>null);
      }
      pushArray(name: string): bool {
        assert(name == null && !this.handledRoot);
        this.handledRoot = true;
        return true;
      }
}

export function __near_decode_Array_String(
        buffer: Uint8Array, state: DecoderState, value: Array<String> = null):Array<String> {
      if (value == null) {
        value = new Array<String>();
      }
      let handler = new __near_JSONHandler_Array_String(value);
      handler.buffer = buffer;
      handler.decoder = new JSONDecoder<__near_JSONHandler_Array_String>(handler);
      handler.decoder.deserialize(buffer, state);
      return value;
    }

export function __near_decode_CorgiMetaData(
        buffer: Uint8Array, state: DecoderState, value: wrapped_CorgiMetaData = null):wrapped_CorgiMetaData {
      if (value == null) {
        value = new wrapped_CorgiMetaData();
      }
      let handler = new __near_JSONHandler_CorgiMetaData(value);
      handler.buffer = buffer;
      handler.decoder = new JSONDecoder<__near_JSONHandler_CorgiMetaData>(handler);
      handler.decoder.deserialize(buffer, state);
      return value;
    }

export function __near_decode_Corgi(
        buffer: Uint8Array, state: DecoderState, value: wrapped_Corgi = null):wrapped_Corgi {
      if (value == null) {
        value = new wrapped_Corgi();
      }
      let handler = new __near_JSONHandler_Corgi(value);
      handler.buffer = buffer;
      handler.decoder = new JSONDecoder<__near_JSONHandler_Corgi>(handler);
      handler.decoder.deserialize(buffer, state);
      return value;
    }

export function __near_encode_Array_Corgi(
          value: Array<wrapped_Corgi>,
          encoder: JSONEncoder): void {
for (let i = 0; i < value.length; i++) {
if (value[i] != null) {
          encoder.pushObject(null);
          __near_encode_Corgi(<Corgi>value[i], encoder);
          encoder.popObject();
        } else {
          encoder.setNull(null);
        }
}
}
export function __near_encode_CorgiArray(
          value: wrapped_CorgiArray,
          encoder: JSONEncoder): void {
if (value.corgis != null) {
          encoder.pushArray("corgis");
          __near_encode_Array_Corgi(<Array<Corgi>>value.corgis, encoder);
          encoder.popArray();
        } else {
          encoder.setNull("corgis");
        }
}
export class __near_JSONHandler_CorgiArray extends ThrowingJSONHandler {
      buffer: Uint8Array;
      decoder: JSONDecoder<__near_JSONHandler_CorgiArray>;
      handledRoot: boolean = false;
      value: wrapped_CorgiArray;

      constructor(value_: wrapped_CorgiArray) {
        super();
        this.value = value_;
      }
      
setNull(name: string): void {
if (name == "corgis") {
        this.value.corgis = <Array<wrapped_Corgi>>null;
        return;
      }

      super.setNull(name);
    }

      pushObject(name: string): bool {
if (!this.handledRoot) {
      assert(name == null);
      this.handledRoot = true;
      return true;
    } else {
      assert(name != null);
    }

        return super.pushObject(name);
      }

      pushArray(name: string): bool {
if (name == "corgis") {
          this.value.corgis = <Array<Corgi>>__near_decode_Array_Corgi(this.buffer, this.decoder.state);
          return false;
        }

        return super.pushArray(name);
      }
}

export class __near_JSONHandler_Array_Corgi extends ThrowingJSONHandler {
      buffer: Uint8Array;
      decoder: JSONDecoder<__near_JSONHandler_Array_Corgi>;
      handledRoot: boolean = false;
      value: Array<wrapped_Corgi>;

      constructor(value_: Array<wrapped_Corgi>) {
        super();
        this.value = value_;
      }
      
pushObject(name: string): bool {
        this.value.push(<Corgi>__near_decode_Corgi(this.buffer, this.decoder.state));
        return false;
      }
      pushArray(name: string): bool {
        assert(name == null);
        if (!this.handledRoot) {
          this.handledRoot = true;
          return true;
        }
        this.value.push(<Corgi>__near_decode_Corgi(this.buffer, this.decoder.state));
        return false;
      }
}

export function __near_decode_Array_Corgi(
        buffer: Uint8Array, state: DecoderState, value: Array<wrapped_Corgi> = null):Array<wrapped_Corgi> {
      if (value == null) {
        value = new Array<wrapped_Corgi>();
      }
      let handler = new __near_JSONHandler_Array_Corgi(value);
      handler.buffer = buffer;
      handler.decoder = new JSONDecoder<__near_JSONHandler_Array_Corgi>(handler);
      handler.decoder.deserialize(buffer, state);
      return value;
    }

export function __near_decode_CorgiArray(
        buffer: Uint8Array, state: DecoderState, value: wrapped_CorgiArray = null):wrapped_CorgiArray {
      if (value == null) {
        value = new wrapped_CorgiArray();
      }
      let handler = new __near_JSONHandler_CorgiArray(value);
      handler.buffer = buffer;
      handler.decoder = new JSONDecoder<__near_JSONHandler_CorgiArray>(handler);
      handler.decoder.deserialize(buffer, state);
      return value;
    }

export class Corgi extends wrapped_Corgi {
        static decode(json: Uint8Array): Corgi {
          let value = new Corgi();
          value.decode(json);
          return value;
        }

        decode(json: Uint8Array): Corgi {
          <Corgi>__near_decode_Corgi(json, null, this);
          return this;
        }

        private _encoder(): JSONEncoder {
          let encoder: JSONEncoder = new JSONEncoder();
          encoder.pushObject(null);
          __near_encode_Corgi(<Corgi>this, encoder);
          encoder.popObject();
          return encoder;
        }

        encode(): Uint8Array {
          return this._encoder().serialize();
        }

        toString(): string {
          return this._encoder().toString();
        }
      }
export class CorgiMetaData extends wrapped_CorgiMetaData {
        static decode(json: Uint8Array): CorgiMetaData {
          let value = new CorgiMetaData();
          value.decode(json);
          return value;
        }

        decode(json: Uint8Array): CorgiMetaData {
          <CorgiMetaData>__near_decode_CorgiMetaData(json, null, this);
          return this;
        }

        private _encoder(): JSONEncoder {
          let encoder: JSONEncoder = new JSONEncoder();
          encoder.pushObject(null);
          __near_encode_CorgiMetaData(<CorgiMetaData>this, encoder);
          encoder.popObject();
          return encoder;
        }

        encode(): Uint8Array {
          return this._encoder().serialize();
        }

        toString(): string {
          return this._encoder().toString();
        }
      }
export class CorgiArray extends wrapped_CorgiArray {
        static decode(json: Uint8Array): CorgiArray {
          let value = new CorgiArray();
          value.decode(json);
          return value;
        }

        decode(json: Uint8Array): CorgiArray {
          <CorgiArray>__near_decode_CorgiArray(json, null, this);
          return this;
        }

        private _encoder(): JSONEncoder {
          let encoder: JSONEncoder = new JSONEncoder();
          encoder.pushObject(null);
          __near_encode_CorgiArray(<CorgiArray>this, encoder);
          encoder.popObject();
          return encoder;
        }

        encode(): Uint8Array {
          return this._encoder().serialize();
        }

        toString(): string {
          return this._encoder().toString();
        }
      }