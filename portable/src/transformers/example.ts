interface RawData {
  data: any;
}

export function transformRepositoryList(raw: unknown): any {
  const data = (raw as RawData).data;

  return data;
}

