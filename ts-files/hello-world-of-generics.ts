interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}

function identity<Type>(arg:Type):Type {
  return arg;
}

let myIdentity: GenericIdentityFn = identity;

//------------------------------------------------
interface SecondGenericIdentitiFn<Type> {
  (arg: Type): Type;
}

function secondIdentity<Type>(arg: Type): Type {
  return arg;
}

let secondMyIdentity: SecondGenericIdentitiFn<number> = secondIdentity;

