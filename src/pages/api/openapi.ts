export default function handler(_req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    const fullPath = path.join(dataDirectory, ‘api.yaml’);
    const fileContents = fs.readFileSync(fullPath, ‘utf8’);
    res.status(200).json(YAML.parse(fileContents));
   }
