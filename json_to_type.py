def json_to_typescript(json_data):
    typescript_dict = {}
    for key, value in json_data.items():
        if value is None:
            typescript_dict[key + "?"] = "None"
        elif isinstance(value, dict):
            typescript_dict[key] = json_to_typescript(value)
        elif isinstance(value, list):
            typescript_dict[key] = [json_to_typescript(item) for item in value]
        else:
            typescript_dict[key] = type(value).__name__
    return typescript_dict
  

typescript_dict = json_to_typescript()
print(typescript_dict)
