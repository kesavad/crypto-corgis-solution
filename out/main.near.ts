
      import { storage, near, base64 } from "./near";
      import { JSONEncoder } from "./json/encoder";
      import { JSONDecoder, ThrowingJSONHandler, DecoderState } from "./json/decoder";
      import {init as wrapped_init, login as wrapped_login, balanceOf as wrapped_balanceOf, ownerOf as wrapped_ownerOf, totalSupply as wrapped_totalSupply, name as wrapped_name, symbol as wrapped_symbol, approve as wrapped_approve, takeOwnership as wrapped_takeOwnership, transfer as wrapped_transfer, generateRandomDna as wrapped_generateRandomDna, generateRandomColorHex as wrapped_generateRandomColorHex, createRandomCorgi as wrapped_createRandomCorgi, getCorgi as wrapped_getCorgi, setCorgi as wrapped_setCorgi, getSender as wrapped_getSender, getCorgisByOwner as wrapped_getCorgisByOwner, setBalance as wrapped_setBalance} from "./main";

      // Runtime functions
      @external("env", "return_value")
      declare function return_value(value_len: usize, value_ptr: usize): void;
    
import {context as context,storage as storage,near as near,collections as collections,base64 as base64} from "./near";
import {Corgi as Corgi,CorgiArray as CorgiArray,CorgiMetaData as CorgiMetaData} from "./model.near";
export class __near_ArgsParser_init extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_init>;
        handledRoot: boolean = false;
      
__near_param_initialOwner: String;
setString(name: string, value: String): void {
if (name == "initialOwner") {
            this.__near_param_initialOwner = <String>value;
            return;
          }

        super.setString(name, value);
      }
setNull(name: string): void {
if (name == "initialOwner") {
        this.__near_param_initialOwner = <String>null;
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

        return super.pushArray(name);
      }
}
export function init(): void {
      // Reading input bytes.
      let json = storage._internalReadBytes(4, 0, 0);
      let handler = new __near_ArgsParser_init();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_init>(handler);
      handler.decoder.deserialize(json);
wrapped_init(
handler.__near_param_initialOwner
);
}
export class __near_ArgsParser_login extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_login>;
        handledRoot: boolean = false;
      
setNull(name: string): void {

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

        return super.pushArray(name);
      }
}
export function login(): void {
      // Reading input bytes.
      let json = storage._internalReadBytes(4, 0, 0);
      let handler = new __near_ArgsParser_login();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_login>(handler);
      handler.decoder.deserialize(json);
wrapped_login(

);
}
export class __near_ArgsParser_balanceOf extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_balanceOf>;
        handledRoot: boolean = false;
      
__near_param_owner: String;
setString(name: string, value: String): void {
if (name == "owner") {
            this.__near_param_owner = <String>value;
            return;
          }

        super.setString(name, value);
      }
setNull(name: string): void {
if (name == "owner") {
        this.__near_param_owner = <String>null;
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

        return super.pushArray(name);
      }
}
export function balanceOf(): void {
      // Reading input bytes.
      let json = storage._internalReadBytes(4, 0, 0);
      let handler = new __near_ArgsParser_balanceOf();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_balanceOf>(handler);
      handler.decoder.deserialize(json);
let result = wrapped_balanceOf(
handler.__near_param_owner
);

        let encoder = new JSONEncoder();
      
encoder.setString(null, result.toString());

        let val = encoder.serialize();
        return_value(val.byteLength, val.buffer.data);
      
}
export class __near_ArgsParser_ownerOf extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_ownerOf>;
        handledRoot: boolean = false;
      
__near_param_tokenId: String;
setString(name: string, value: String): void {
if (name == "tokenId") {
            this.__near_param_tokenId = <String>value;
            return;
          }

        super.setString(name, value);
      }
setNull(name: string): void {
if (name == "tokenId") {
        this.__near_param_tokenId = <String>null;
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

        return super.pushArray(name);
      }
}
export function ownerOf(): void {
      // Reading input bytes.
      let json = storage._internalReadBytes(4, 0, 0);
      let handler = new __near_ArgsParser_ownerOf();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_ownerOf>(handler);
      handler.decoder.deserialize(json);
let result = wrapped_ownerOf(
handler.__near_param_tokenId
);

        let encoder = new JSONEncoder();
      
if (result != null) {
            encoder.setString(null, result);
          } else {
            encoder.setNull(null);
          }

        let val = encoder.serialize();
        return_value(val.byteLength, val.buffer.data);
      
}
export class __near_ArgsParser_totalSupply extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_totalSupply>;
        handledRoot: boolean = false;
      
setNull(name: string): void {

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

        return super.pushArray(name);
      }
}
export function totalSupply(): void {
      // Reading input bytes.
      let json = storage._internalReadBytes(4, 0, 0);
      let handler = new __near_ArgsParser_totalSupply();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_totalSupply>(handler);
      handler.decoder.deserialize(json);
let result = wrapped_totalSupply(

);

        let encoder = new JSONEncoder();
      
if (result != null) {
            encoder.setString(null, result);
          } else {
            encoder.setNull(null);
          }

        let val = encoder.serialize();
        return_value(val.byteLength, val.buffer.data);
      
}
export class __near_ArgsParser_name extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_name>;
        handledRoot: boolean = false;
      
setNull(name: string): void {

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

        return super.pushArray(name);
      }
}
export function name(): void {
      // Reading input bytes.
      let json = storage._internalReadBytes(4, 0, 0);
      let handler = new __near_ArgsParser_name();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_name>(handler);
      handler.decoder.deserialize(json);
let result = wrapped_name(

);

        let encoder = new JSONEncoder();
      
if (result != null) {
            encoder.setString(null, result);
          } else {
            encoder.setNull(null);
          }

        let val = encoder.serialize();
        return_value(val.byteLength, val.buffer.data);
      
}
export class __near_ArgsParser_symbol extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_symbol>;
        handledRoot: boolean = false;
      
setNull(name: string): void {

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

        return super.pushArray(name);
      }
}
export function symbol(): void {
      // Reading input bytes.
      let json = storage._internalReadBytes(4, 0, 0);
      let handler = new __near_ArgsParser_symbol();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_symbol>(handler);
      handler.decoder.deserialize(json);
let result = wrapped_symbol(

);

        let encoder = new JSONEncoder();
      
if (result != null) {
            encoder.setString(null, result);
          } else {
            encoder.setNull(null);
          }

        let val = encoder.serialize();
        return_value(val.byteLength, val.buffer.data);
      
}
export class __near_ArgsParser_approve extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_approve>;
        handledRoot: boolean = false;
      
__near_param_to: String;
__near_param_tokenId: String;
setString(name: string, value: String): void {
if (name == "to") {
            this.__near_param_to = <String>value;
            return;
          }
if (name == "tokenId") {
            this.__near_param_tokenId = <String>value;
            return;
          }

        super.setString(name, value);
      }
setNull(name: string): void {
if (name == "to") {
        this.__near_param_to = <String>null;
        return;
      }
if (name == "tokenId") {
        this.__near_param_tokenId = <String>null;
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

        return super.pushArray(name);
      }
}
export function approve(): void {
      // Reading input bytes.
      let json = storage._internalReadBytes(4, 0, 0);
      let handler = new __near_ArgsParser_approve();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_approve>(handler);
      handler.decoder.deserialize(json);
wrapped_approve(
handler.__near_param_to,handler.__near_param_tokenId
);
}
export class __near_ArgsParser_takeOwnership extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_takeOwnership>;
        handledRoot: boolean = false;
      
__near_param_tokenId: String;
setString(name: string, value: String): void {
if (name == "tokenId") {
            this.__near_param_tokenId = <String>value;
            return;
          }

        super.setString(name, value);
      }
setNull(name: string): void {
if (name == "tokenId") {
        this.__near_param_tokenId = <String>null;
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

        return super.pushArray(name);
      }
}
export function takeOwnership(): void {
      // Reading input bytes.
      let json = storage._internalReadBytes(4, 0, 0);
      let handler = new __near_ArgsParser_takeOwnership();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_takeOwnership>(handler);
      handler.decoder.deserialize(json);
wrapped_takeOwnership(
handler.__near_param_tokenId
);
}
export class __near_ArgsParser_transfer extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_transfer>;
        handledRoot: boolean = false;
      
__near_param_to: String;
__near_param_tokenId: String;
setString(name: string, value: String): void {
if (name == "to") {
            this.__near_param_to = <String>value;
            return;
          }
if (name == "tokenId") {
            this.__near_param_tokenId = <String>value;
            return;
          }

        super.setString(name, value);
      }
setNull(name: string): void {
if (name == "to") {
        this.__near_param_to = <String>null;
        return;
      }
if (name == "tokenId") {
        this.__near_param_tokenId = <String>null;
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

        return super.pushArray(name);
      }
}
export function transfer(): void {
      // Reading input bytes.
      let json = storage._internalReadBytes(4, 0, 0);
      let handler = new __near_ArgsParser_transfer();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_transfer>(handler);
      handler.decoder.deserialize(json);
wrapped_transfer(
handler.__near_param_to,handler.__near_param_tokenId
);
}
export class __near_ArgsParser_generateRandomDna extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_generateRandomDna>;
        handledRoot: boolean = false;
      
setNull(name: string): void {

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

        return super.pushArray(name);
      }
}
export function generateRandomDna(): void {
      // Reading input bytes.
      let json = storage._internalReadBytes(4, 0, 0);
      let handler = new __near_ArgsParser_generateRandomDna();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_generateRandomDna>(handler);
      handler.decoder.deserialize(json);
let result = wrapped_generateRandomDna(

);

        let encoder = new JSONEncoder();
      
if (result != null) {
            encoder.setString(null, result);
          } else {
            encoder.setNull(null);
          }

        let val = encoder.serialize();
        return_value(val.byteLength, val.buffer.data);
      
}
export class __near_ArgsParser_generateRandomColorHex extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_generateRandomColorHex>;
        handledRoot: boolean = false;
      
__near_param_int: i32;
setInteger(name: string, value: i64): void {
if (name == "int") {
            this.__near_param_int = <i32>value;
            return;
          }

        super.setInteger(name, value);
      }
setNull(name: string): void {
if (name == "int") {
        this.__near_param_int = <i32>null;
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

        return super.pushArray(name);
      }
}
export function generateRandomColorHex(): void {
      // Reading input bytes.
      let json = storage._internalReadBytes(4, 0, 0);
      let handler = new __near_ArgsParser_generateRandomColorHex();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_generateRandomColorHex>(handler);
      handler.decoder.deserialize(json);
let result = wrapped_generateRandomColorHex(
handler.__near_param_int
);

        let encoder = new JSONEncoder();
      
if (result != null) {
            encoder.setString(null, result);
          } else {
            encoder.setNull(null);
          }

        let val = encoder.serialize();
        return_value(val.byteLength, val.buffer.data);
      
}
export class __near_ArgsParser_createRandomCorgi extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_createRandomCorgi>;
        handledRoot: boolean = false;
      
__near_param_name: String;
__near_param_seed: i32;
setInteger(name: string, value: i64): void {
if (name == "seed") {
            this.__near_param_seed = <i32>value;
            return;
          }

        super.setInteger(name, value);
      }
setString(name: string, value: String): void {
if (name == "name") {
            this.__near_param_name = <String>value;
            return;
          }

        super.setString(name, value);
      }
setNull(name: string): void {
if (name == "name") {
        this.__near_param_name = <String>null;
        return;
      }
if (name == "seed") {
        this.__near_param_seed = <i32>null;
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

        return super.pushArray(name);
      }
}
import { __near_encode_Corgi } from "./model.near";
export function createRandomCorgi(): void {
      // Reading input bytes.
      let json = storage._internalReadBytes(4, 0, 0);
      let handler = new __near_ArgsParser_createRandomCorgi();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_createRandomCorgi>(handler);
      handler.decoder.deserialize(json);
let result = wrapped_createRandomCorgi(
handler.__near_param_name,handler.__near_param_seed
);

        let encoder = new JSONEncoder();
      
if (result != null) {
          encoder.pushObject(null);
          __near_encode_Corgi(<Corgi>result, encoder);
          encoder.popObject();
        } else {
          encoder.setNull(null);
        }

        let val = encoder.serialize();
        return_value(val.byteLength, val.buffer.data);
      
}
export class __near_ArgsParser_getCorgi extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_getCorgi>;
        handledRoot: boolean = false;
      
__near_param_tokenId: String;
setString(name: string, value: String): void {
if (name == "tokenId") {
            this.__near_param_tokenId = <String>value;
            return;
          }

        super.setString(name, value);
      }
setNull(name: string): void {
if (name == "tokenId") {
        this.__near_param_tokenId = <String>null;
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

        return super.pushArray(name);
      }
}
export function getCorgi(): void {
      // Reading input bytes.
      let json = storage._internalReadBytes(4, 0, 0);
      let handler = new __near_ArgsParser_getCorgi();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_getCorgi>(handler);
      handler.decoder.deserialize(json);
let result = wrapped_getCorgi(
handler.__near_param_tokenId
);

        let encoder = new JSONEncoder();
      
if (result != null) {
          encoder.pushObject(null);
          __near_encode_Corgi(<Corgi>result, encoder);
          encoder.popObject();
        } else {
          encoder.setNull(null);
        }

        let val = encoder.serialize();
        return_value(val.byteLength, val.buffer.data);
      
}
import { __near_decode_Corgi } from "./model.near";
export class __near_ArgsParser_setCorgi extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_setCorgi>;
        handledRoot: boolean = false;
      
__near_param_corgi: Corgi;
setNull(name: string): void {
if (name == "corgi") {
        this.__near_param_corgi = <Corgi>null;
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
if (name == "corgi") {
          this.__near_param_corgi = <Corgi>__near_decode_Corgi(this.buffer, this.decoder.state);
          return false;
        }

        return super.pushObject(name);
      }

      pushArray(name: string): bool {

        return super.pushArray(name);
      }
}
export function setCorgi(): void {
      // Reading input bytes.
      let json = storage._internalReadBytes(4, 0, 0);
      let handler = new __near_ArgsParser_setCorgi();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_setCorgi>(handler);
      handler.decoder.deserialize(json);
wrapped_setCorgi(
handler.__near_param_corgi
);
}
export class __near_ArgsParser_getSender extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_getSender>;
        handledRoot: boolean = false;
      
setNull(name: string): void {

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

        return super.pushArray(name);
      }
}
export function getSender(): void {
      // Reading input bytes.
      let json = storage._internalReadBytes(4, 0, 0);
      let handler = new __near_ArgsParser_getSender();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_getSender>(handler);
      handler.decoder.deserialize(json);
let result = wrapped_getSender(

);

        let encoder = new JSONEncoder();
      
if (result != null) {
            encoder.setString(null, result);
          } else {
            encoder.setNull(null);
          }

        let val = encoder.serialize();
        return_value(val.byteLength, val.buffer.data);
      
}
export class __near_ArgsParser_getCorgisByOwner extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_getCorgisByOwner>;
        handledRoot: boolean = false;
      
__near_param_owner: String;
setString(name: string, value: String): void {
if (name == "owner") {
            this.__near_param_owner = <String>value;
            return;
          }

        super.setString(name, value);
      }
setNull(name: string): void {
if (name == "owner") {
        this.__near_param_owner = <String>null;
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

        return super.pushArray(name);
      }
}
import { __near_encode_CorgiArray } from "./model.near";
export function getCorgisByOwner(): void {
      // Reading input bytes.
      let json = storage._internalReadBytes(4, 0, 0);
      let handler = new __near_ArgsParser_getCorgisByOwner();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_getCorgisByOwner>(handler);
      handler.decoder.deserialize(json);
let result = wrapped_getCorgisByOwner(
handler.__near_param_owner
);

        let encoder = new JSONEncoder();
      
if (result != null) {
          encoder.pushObject(null);
          __near_encode_CorgiArray(<CorgiArray>result, encoder);
          encoder.popObject();
        } else {
          encoder.setNull(null);
        }

        let val = encoder.serialize();
        return_value(val.byteLength, val.buffer.data);
      
}
export class __near_ArgsParser_setBalance extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_setBalance>;
        handledRoot: boolean = false;
      
__near_param_owner: String;
__near_param_balance: u64;
setString(name: string, value: String): void {
if (name == "owner") {
            this.__near_param_owner = <String>value;
            return;
          }
if (name == "balance") {
            this.__near_param_balance = U64.parseInt(value);
              return;
            }

        super.setString(name, value);
      }
setNull(name: string): void {
if (name == "owner") {
        this.__near_param_owner = <String>null;
        return;
      }
if (name == "balance") {
        this.__near_param_balance = <u64>null;
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

        return super.pushArray(name);
      }
}
export function setBalance(): void {
      // Reading input bytes.
      let json = storage._internalReadBytes(4, 0, 0);
      let handler = new __near_ArgsParser_setBalance();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_setBalance>(handler);
      handler.decoder.deserialize(json);
wrapped_setBalance(
handler.__near_param_owner,handler.__near_param_balance
);
}