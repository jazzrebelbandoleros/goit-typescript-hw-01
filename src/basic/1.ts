let user: {
  age: number;
  name: string;
  toggle: boolean;
  empty: null;
  callback: any;
} = {
  age: 50,
  name: "Max",
  toggle: true,
  empty: null,
  callback: (a: number): number => {
    return 100 + a;
  },
};
