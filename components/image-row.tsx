interface imageMeta {
  preview: string;
  source: string;
}

export default ({ imageRecord }: { imageRecord: imageMeta[] }) => {
  return (
    <div className="grid gap-4">
      {imageRecord.map((record: imageMeta, idx) => (
        <a
          key={idx}
          href={record.source}
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <img
            className="h-auto max-w-full rounded-lg"
            src={record.preview}
            alt=""
          />
        </a>
      ))}
    </div>
  );
};
